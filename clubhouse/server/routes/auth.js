let passport = require("passport");
let bcrypt = require("bcryptjs");
let LocalStrategy = require("passport-local").Strategy;
let { PrismaClient } = require("@prisma/client");

let prisma = new PrismaClient();

passport.use(
    new LocalStrategy(async (username, password, done) => {
        let existUser = await prisma.user.findFirst({
            where: {
                username: username,
            },
            include: {
                auth: {
                    select: {
                        password: true,
                    },
                },
            },
        });

        if (!existUser) {
            return done(null, false, {
                message: "No user found",
            });
        }

        //compare hashed password in db to user input pw
        bcrypt.compare(password, existUser.auth.password, (err, res) => {
            if (res) {
                return done(null, existUser);
            } else {
                return done(null, false, { message: "Incorrect password" });
            }
        });
    })
);

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    const user = await prisma.user.findFirst({
        where: {
            id: id,
        },
    });

    done(null, user);
});

module.exports = passport;
