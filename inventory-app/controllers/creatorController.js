let async = require("async");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.creator_list = async function (req, res) {
    let creators = await prisma.creator
        .findMany({
            orderBy: {
                name: "asc",
            },
        })
        .then((results) =>
            results.map((obj) => ({ ...obj, url: "/creator/" + obj.id }))
        );

    res.render("./pages/creator_list", { title: "List of Creators", creators });
};

exports.creator_detail = async function (req, res) {
    let creator = await prisma.creator.findUnique({
        where: {
            id: req.params.id,
        },
    });

    res.render("./pages/creator_detail", { title: creator.name, creator });
};
