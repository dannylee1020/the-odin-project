let async = require("async");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const prisma = new PrismaClient();

exports.creator_list = async function (req, res) {
    let creators = await prisma.creator
        .findMany({
            orderBy: {
                name: "asc",
            },
        })
        .then((results) =>
            results.map((res) => ({ ...res, url: "/creator/" + res.id }))
        );

    res.render("./pages/creator_list", { title: "List of Creators", creators });
};

exports.creator_detail = async function (req, res) {
    let creator = await prisma.creator.findUnique({
        where: {
            id: req.params.id,
        },
    });

    let items = await prisma.item.findMany({
        where: {
            creator_id: req.params.id,
        },
    });

    res.render("./pages/creator_detail", {
        title: creator.name,
        creator,
        items,
    });
};

exports.create_creator_get = function (req, res) {
    res.render("./pages/creator_form", { title: "Add Creator" });
};

exports.create_creator_post = [
    body("name").trim().isLength({ min: 1 }).escape(),
    body("description").trim().isLength({ min: 1 }).escape(),
    body("founded").trim().isLength({ min: 1 }).escape(),

    async function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render("./pages/creator_form", {
                title: "Add Creator",
                errors: errors.array(),
            });
        } else {
            await prisma.creator.create({
                data: {
                    name: req.body.name,
                    description: req.body.description,
                    founded: req.body.founded,
                },
            });

            res.redirect("/creator");
        }
    },
];

exports.delete_creator_get = function (req, res, next) {
    async.parallel(
        {
            creator: async function (callback) {
                return await prisma.creator.findUnique({
                    where: {
                        id: req.params.id,
                    },
                });
            },

            items: async function (callback) {
                return await prisma.item.findMany({
                    where: {
                        creator_id: req.params.id,
                    },
                });
            },
        },
        function (err, results) {
            if (err) {
                return next(err);
            }

            res.render("./pages/creator_delete", {
                title: "Delete Creator",
                creator: results.creator,
                items: results.items,
            });
        }
    );
};

exports.delete_creator_post = function (req, res, next) {
    async.parallel(
        {
            creator: async function (callback) {
                await prisma.creator.findUnique({
                    where: {
                        id: req.params.id,
                    },
                });
            },

            items: async function (callback) {
                await prisma.item.findMany({
                    where: {
                        creator_id: req.params.id,
                    },
                });
            },
        },
        async function (err, results) {
            if (err) {
                return next(err);
            }

            await prisma.creator.delete({
                where: {
                    id: req.params.id,
                },
            });

            res.redirect("/creator");
        }
    );
};

exports.update_creator_get = async function (req, res) {
    const creator = await prisma.creator.findUnique({
        where: {
            id: req.params.id,
        },
    });

    res.render("./pages/creator_update", { title: "Update Creator", creator });
};

exports.update_creator_post = [
    body("creator").trim().isLength({ min: 1 }).escape(),
    body("desc").trim().isLength({ min: 1 }).escape(),
    body("founded").trim().isLength({ min: 1 }).escape(),

    async function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let creator = await prisma.creator.findUnique({
                where: {
                    id: req.params.id,
                },
            });

            res.render("./pages/creator_update", {
                title: "Update Creator",
                creator,
                errors: errors.array(),
            });
        } else {
            await prisma.creator.update({
                where: {
                    id: req.params.id,
                },
                data: {
                    name: req.body.creator,
                    description: req.body.desc,
                    founded: req.body.founded,
                },
            });

            res.redirect("/creator");
        }
    },
];
