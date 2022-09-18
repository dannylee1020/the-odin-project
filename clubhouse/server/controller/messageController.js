const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");

const prisma = new PrismaClient();

exports.get_all_message = async function (req, res) {
    const messages = await prisma.message.findMany();
    res.json({ data: messages, message: "successfully fetched all messages" });
};

exports.create_message = [
    body("message").trim().isLength({ min: 1 }).escape(),

    async function (req, res) {
        const errors = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        } else {
            try {
                await prisma.message.create({
                    data: {
                        user_id: req.user.id,
                        message: req.body.message,
                    },
                });
                res.send("message created successfully");
            } catch (e) {
                res.send({ error: e.meta, message: e.message });
            }
        }
    },
];
