const { PrismaClient } = require("@prisma/client");
let async = require("async");

const prisma = new PrismaClient();

async function main() {
    await prisma.$connect();

    async.parallel([
        async function (callback) {
            await prisma.user.create({
                data: {
                    first_name: "Eden",
                    last_name: "Harzard",
                    username: "edenhazard",
                    status: false,
                    auth: {
                        create: {
                            password: "edenhazardpw",
                        },
                    },
                    messages: {
                        createMany: {
                            data: [
                                {
                                    message:
                                        "Hi this is Eden Harazd from Real Madrid",
                                },
                                {
                                    message: "my position at RM is a winger",
                                },
                            ],
                        },
                    },
                },
            });
        },

        async function (callback) {
            await prisma.user.create({
                data: {
                    first_name: "Jaden",
                    last_name: "Sancho",
                    username: "jadensancho",
                    status: false,
                    auth: {
                        create: {
                            password: "jadensanchopw",
                        },
                    },
                    messages: {
                        createMany: {
                            data: [
                                {
                                    message:
                                        "This is Jaden Sancho from Man Utd",
                                },
                                {
                                    message: "I play winger at Man Utd",
                                },
                            ],
                        },
                    },
                },
            });
        },

        async function (callback) {
            await prisma.user.create({
                data: {
                    first_name: "Frankie",
                    last_name: "de Jong ",
                    username: "frankiedejong",
                    status: false,
                    auth: {
                        create: {
                            password: "frankiedejongpw",
                        },
                    },
                    messages: {
                        createMany: {
                            data: [
                                {
                                    message:
                                        "I am Frankie de Jong from Barcelona",
                                },
                                {
                                    message:
                                        "I play central midfielder at Barca",
                                },
                            ],
                        },
                    },
                },
            });
        },

        async function (callback) {
            await prisma.user.create({
                data: {
                    first_name: "Kevin",
                    last_name: "De Bruyne",
                    username: "kevindebruyne",
                    status: false,

                    auth: {
                        create: {
                            password: "kevindebruyne",
                        },
                    },
                    messages: {
                        createMany: {
                            data: [
                                {
                                    message:
                                        "I am Kevin de Bruyne from Man City",
                                },
                                {
                                    message:
                                        "I mostly play as a LM or CAM at Man City",
                                },
                            ],
                        },
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
