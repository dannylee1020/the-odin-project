let async = require("async");
const { PrismaClient } = require("@prisma/client");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

exports.create_user_post = [
    body("first_name").trim().isLength({ min: 1 }).escape(),
    body("last_name").trim().isLength({ min: 1 }).escape(),
    body("username").trim().isLength({ min: 1 }).escape(),
    body("password").trim().isLength({ min: 1 }).escape(),

    async function (req, res) {
        const errors = validationResult(req);
        bcrypt.hash(req.body.password, 10, async (err, pw) => {
            if (err) {
                console.log(err);
            } else {
                if (!errors.isEmpty()) {
                    return res.status(422).json({ errors: errors.array() });
                } else {
                    await prisma.user.create({
                        data: {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            username: req.body.username,
                            auth: {
                                create: { password: pw },
                            },
                        },
                        include: {
                            auth: true,
                        },
                    });

                    res.status(200).json({ message: "request successful" });
                }
            }
        });
    },
];
