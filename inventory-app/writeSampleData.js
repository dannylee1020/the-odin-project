let async = require("async");
const ObjectId = require("bson").ObjectID;
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    errorFormat: "pretty",
});

async function main() {
    await prisma.$connect();

    async.series([
        async function (callback) {
            // write items data
            await prisma.item.createMany({
                data: [
                    {
                        name: "Airflow",
                        description:
                            "workflow management platform for data engineering pipelines",
                        released_year: "2015",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "GraphQL",
                        description:
                            "open source data query and manipulation language for APIs",
                        released_year: "2015",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "PyTorch",
                        description:
                            "open source maching learning framework used for applications such as coomputer vision and NLP",
                        released_year: "2016",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "Kafka",
                        description:
                            "open source distributed event streaming platform",
                        released_year: "2011",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "React.js",
                        description:
                            "open source front-end JS framework for building user interfaces.",
                        released_year: "2013",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "Kubernetes",
                        description:
                            "open source container orchestration system for automating sofware deployment",
                        released_year: "2014",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "Node.js",
                        description:
                            "open source cross-platform JS runtime environment",
                        released_year: "2009",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                ],
            });
        },

        // write category data
        async function (callback) {
            await prisma.category.create({
                data: {
                    name: "Web Development",
                    description: "Framework for web development",
                    items: {
                        connect: [{ name: "React.js" }, { name: "Node.js" }],
                    },
                },
            });
        },
        async function (callback) {
            await prisma.category.create({
                data: {
                    name: "Data",
                    description: "open source projects used for data science",
                    items: {
                        connect: [
                            { name: "Kafka" },
                            { name: "Airflow" },
                            { name: "PyTorch" },
                        ],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.category.create({
                data: {
                    name: "Backend",
                    description: "Technologies used in the backend",
                    items: {
                        connect: [{ name: "GraphQL" }, { name: "Kubernetes" }],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.category.create({
                data: {
                    name: "Frontend",
                    description: "Technologies used in the frontend",
                    items: {
                        connect: [{ name: "React.js" }],
                    },
                },
            });
        },

        // write creator data
        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "Facebook",
                    items: {
                        connect: [
                            { name: "React.js" },
                            { name: "PyTorch" },
                            { name: "GraphQL" },
                        ],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "AirBnB",
                    items: {
                        connect: [{ name: "Airflow" }],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "Google",
                    items: {
                        connect: [{ name: "Kubernetes" }],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "LinkedIn",
                    items: {
                        connect: [{ name: "Kafka" }],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "Ryan Dahl",
                    items: {
                        connect: [{ name: "Node.js" }],
                    },
                },
            });
        },
    ]);
}

main()
    .catch((err) => {
        throw err;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
