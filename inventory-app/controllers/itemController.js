let async = require("async");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

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

exports.creat_item_post = [
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
        } else {
            // ! check if category or creator already exists.
            // * if yes --> add relations
            // * if no --> create new ones

            await prisma.item.create({
                data: {},
            });
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
