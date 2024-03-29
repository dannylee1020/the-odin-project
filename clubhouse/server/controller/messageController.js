const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const prisma = new PrismaClient();

exports.get_all_message = async function (req, res) {
    const messages = await prisma.message.findMany({
        include: {
            user: {
                select: {
                    username: true,
                },
            },
        },
    });

    res.json({ data: messages, message: "successfully fetched all messages" });
};

exports.create_message = [
    body("message").trim().isLength({ min: 1 }).escape(),

    async function (req, res) {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            try {
                await prisma.message.create({
                    data: {
                        user_id: req.user.id,
                        message: req.body.message,
                    },
                });
                res.send({ message: "message created successfully" });
            } catch (e) {
                res.send({ error: e.meta, message: e.message });
            }
        }
    },
];

exports.delete_message = async (req, res) => {
    await prisma.message.delete({
        where: {
            id: parseInt(req.body.id),
        },
    });

    res.send({ message: "successfully deleted a message" });
};
