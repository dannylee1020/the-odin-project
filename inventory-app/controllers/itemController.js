let async = require("async");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");
const ObjectId = require("bson").ObjectID;

const prisma = new PrismaClient();

exports.item_list = async function (req, res) {
    const items = await prisma.item
        .findMany({
            orderBy: {
                name: "asc",
            },
        })
        .then((results) =>
            results.map((res) => ({ ...res, url: "/items/" + res.id }))
        );

    res.render("./pages/item_list", { title: "List of Items", items });
};

exports.create_item_get = function (req, res) {
    res.render("./pages/item_form", { title: "Create Item" });
};

exports.create_item_post = [
    body("name").trim().isLength({ min: 1 }).escape(),
    body("description").trim().isLength({ min: 1 }).escape(),
    body("released_year").trim().isLength({ min: 1 }).escape(),
    body("category").trim().isLength({ min: 1 }).escape(),
    body("creator").trim().isLength({ min: 1 }).escape(),

    async function (req, res, next) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.render("./pages/item_form", {
                title: "Create Item",
                errors: errors.array(),
            });

            console.log(errors);
        } else {
            const creator = await prisma.creator.findUnique({
                where: {
                    name: req.body.creator,
                },
            });

            const category = await prisma.category.findUnique({
                where: {
                    name: req.body.category,
                },
            });

            if (creator && category) {
                await prisma.item.create({
                    data: {
                        name: req.body.name,
                        description: req.body.description,
                        category_id: category.id,
                        creator_id: creator.id,
                        released_year: req.body.released_year,
                    },
                });
                res.redirect("/items");
            } else if (creator && !category) {
                await prisma.category.create({
                    data: {
                        name: req.body.category,
                        description: "",
                        items: {
                            create: {
                                name: req.body.name,
                                description: req.body.description,
                                creator_id: creator.id,
                                released_year: req.body.released_year,
                            },
                        },
                    },
                });
                res.redirect("/items");
            } else if (!creator && category) {
                await prisma.creator.create({
                    data: {
                        name: req.body.creator,
                        description: "",
                        founded: "",
                        items: {
                            create: {
                                name: req.body.name,
                                description: req.body.description,
                                category_id: category.id,
                                released_year: req.body.released_year,
                            },
                        },
                    },
                });
                res.redirect("/items");
            } else {
                async.series(
                    [
                        async function (callback) {
                            await prisma.item.create({
                                data: {
                                    name: req.body.name,
                                    description: req.body.description,
                                    category_id: new ObjectId().toString(),
                                    creator_id: new ObjectId().toString(),
                                    released_year: req.body.released_year,
                                },
                            });
                        },

                        async function (callback) {
                            await prisma.category.create({
                                data: {
                                    name: req.body.category,
                                    description: "",
                                    items: {
                                        connect: { name: req.body.name },
                                    },
                                },
                            });
                        },

                        async function (callback) {
                            await prisma.creator.create({
                                data: {
                                    name: req.body.creator,
                                    description: "",
                                    founded: "",
                                    items: {
                                        connect: { name: req.body.name },
                                    },
                                },
                            });
                        },

                        function (callback) {
                            console.log("testing async series");
                            callback();
                        },
                    ],
                    function (err, results) {
                        if (err) {
                            return next(err);
                        }

                        res.redirect("/items");
                    }
                );
            }
        }
    },
];

exports.item_detail = async function (req, res) {
    const result = await prisma.item.findUnique({
        where: {
            id: req.params.id,
        },
        include: {
            creator: {
                select: {
                    name: true,
                },
            },
            category: {
                select: {
                    name: true,
                },
            },
        },
    });

    res.render("./pages/item_detail", { result });
};

exports.delete_items_get = async function (req, res) {
    const item = await prisma.item.findUnique({
        where: {
            id: req.params.id,
        },
    });

    const creator = await prisma.creator.findUnique({
        where: {
            id: item.creator_id,
        },
    });

    const category = await prisma.category.findUnique({
        where: {
            id: item.category_id,
        },
    });

    res.render("./pages/item_delete", { item, creator, category });
};

exports.delete_items_post = async function (req, res, next) {
    const ids = await prisma.item.findUnique({
        where: {
            id: req.params.id,
        },
        select: {
            category_id: true,
            creator_id: true,
        },
    });

    async.series(
        [
            async function (callback) {
                await prisma.item.delete({
                    where: {
                        id: req.params.id,
                    },
                });
            },

            async function (callback) {
                await prisma.category.delete({
                    where: {
                        id: ids["category_id"],
                    },
                });
            },

            async function (callback) {
                await prisma.creator.delete({
                    where: {
                        id: ids["creator_id"],
                    },
                });
            },
        ],
        function (err, results) {
            if (err) {
                return next(err);
            }

            res.redirect("/items");
        }
    );
};

exports.update_item_get = async function (req, res) {
    const item = await prisma.item.findUnique({
        where: {
            id: req.params.id,
        },
    });
    res.render("./pages/item_update", { title: "Update Item", item });
};

exports.update_item_post = [
    body("name").trim().isLength({ min: 1 }).escape(),
    body("description").trim().isLength({ min: 1 }).escape(),
    body("released_year").trim().isLength({ min: 1 }).escape(),

    async function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            let item = await prisma.item.findUnique({
                where: {
                    id: req.params.id,
                },
            });

            res.render("./pages/item_update", {
                title: "Update Item",
                item,
                errors: errors.array(),
            });
        } else {
            await prisma.item.update({
                where: {
                    id: req.params.id,
                },
                data: {
                    name: req.body.name,
                    description: req.body.description,
                    released_year: req.body.released_year,
                },
            });

            res.redirect("/items");
        }
    },
];
