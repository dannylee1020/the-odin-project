let async = require("async");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

exports.category_list = async function (req, res) {
    const category = await prisma.category.findMany({
        orderBy: {
            name: "asc",
        },
    });

    console.log(category);

    res.render("./pages/category_list", {
        title: "List of Categories",
        category_list: category,
    });
};
