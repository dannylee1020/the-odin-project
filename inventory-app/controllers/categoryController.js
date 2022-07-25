let async = require("async");
const { body, validationResult } = require("express-validator");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.category_list = async function (req, res) {
    const category = await prisma.category
        .findMany({
            orderBy: {
                name: "asc",
            },
        })
        .then((results) =>
            results.map((obj) => ({ ...obj, url: "/category/" + obj.id }))
        );

    res.render("./pages/category_list", {
        title: "List of Categories",
        category_list: category,
    });
};

exports.category_details = function (req, res, next) {
    async.parallel(
        {
            category: async function (callback) {
                return await prisma.category.findUnique({
                    where: {
                        id: req.params.id,
                    },
                });
            },

            items: async function (callback) {
                return await prisma.item.findMany({
                    where: {
                        category_id: req.params.id,
                    },
                });
            },
        },
        function (err, results) {
            if (err) {
                return next(err);
            }

            res.render("./pages/category_detail", {
                title: "Category Detail",
                category: results.category,
                items: results.items,
            });
        }
    );
};

exports.create_category_get = function (req, res) {
    res.render("./pages/category_form", { title: "Add Category" });
};

exports.create_category_post = [
    body("name").trim().isLength({ min: 1 }).escape(),
    body("description").trim().isLength({ min: 1 }).escape(),

    async function (req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render("./pages/category_form", {
                title: "List of Categories",
                errors: errors.array(),
            });

            return;
        } else {
            try {
                await prisma.category.create({
                    data: {
                        name: req.body.name,
                        description: req.body.description,
                        items: {},
                    },
                });
            } catch (e) {
                console.log(e);
            }

            res.redirect("/");
        }
    },
];

exports.delete_category_get = function (req, res, next) {
    async.parallel(
        {
            category: async function (callback) {
                return await prisma.category.findUnique({
                    where: {
                        id: req.params.id,
                    },
                });
            },

            items: async function (callback) {
                return await prisma.item.findMany({
                    where: {
                        category_id: req.params.id,
                    },
                });
            },
        },
        function (err, results) {
            if (err) {
                return next(err);
            }

            if (results.category == null) {
                res.redirect("/category");
            }

            console.log(results.items);

            res.render("./pages/category_delete", {
                title: "Delete Category",
                category: results.category,
                items: results.items,
            });
        }
    );
};

exports.delete_category_post = function (req, res, next) {
    async.parallel(
        {
            category: async function (callback) {
                return await prisma.category.findUnique({
                    where: {
                        id: req.params.id,
                    },
                });
            },

            items: async function (callback) {
                return await prisma.item.findMany({
                    where: {
                        category_id: req.params.id,
                    },
                });
            },
        },
        async function (err, results) {
            if (err) {
                return next(err);
            }

            await prisma.category.delete({
                where: {
                    id: req.params.id,
                },
            });

            res.redirect("/category");
        }
    );
};
