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
                        name: "Spark",
                        description:
                            "open source unified analytics engine form large-scale data processing",
                        released_year: "2014",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "Angular.js",
                        description:
                            "JS based open-source front-end web framework for developing single-page applications",
                        released_year: "2010",
                        category_id: new ObjectId().toString(),
                        creator_id: new ObjectId().toString(),
                    },
                    {
                        name: "Electron",
                        description:
                            "Open-source software framework that is designed to create desktop applications using web technologies",
                        released_year: "2013",
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
                    name: "Data",
                    description: "open source projects used for data science",
                    items: {
                        connect: [
                            { name: "Kafka" },
                            { name: "Airflow" },
                            { name: "PyTorch" },
                            { name: "Spark" },
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
                        connect: [
                            { name: "React.js" },
                            { name: "Angular.js" },
                            { name: "Electron" },
                        ],
                    },
                },
            });
        },

        // write creator data
        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "Facebook",
                    description:
                        "American tech giant that owns Facebook, Instagram, Whatsapp among other products and services",
                    founded: "Feb 2004",
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
                    description:
                        "American tech company that operats an online marketplace for lodging, primarily homestays for vacation rentals and tourism activities",
                    founded: "Aug 2008",
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
                    description:
                        "American tech giant that focuses on search engine technology, online advertising, cloud computing and many other cutting edge technologies",
                    founded: "Sep 1998",
                    items: {
                        connect: [
                            { name: "Kubernetes" },
                            { name: "Angular.js" },
                        ],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "LinkedIn",
                    description:
                        "American tech company that provides employment-oriented online service",
                    founded: "2002",
                    items: {
                        connect: [{ name: "Kafka" }],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "Databricks",
                    description:
                        "American enterprise software company that develops a web-based platform for working with Spark",
                    founded: "2013",
                    items: {
                        connect: [{ name: "Spark" }],
                    },
                },
            });
        },

        async function (callback) {
            await prisma.creator.create({
                data: {
                    name: "GitHub",
                    description:
                        "Provider of internet hosting for software development and version control using Git",
                    founded: "2008",
                    items: {
                        connect: [{ name: "Electron" }],
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
