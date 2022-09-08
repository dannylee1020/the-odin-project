let express = require("express");
let passport = require("passport");
let LocalStrategy = require("passport-local").Strategy;
let { PrismaClient } = require("@prisma/client");

let router = express.Router();
let prisma = new PrismaClient();

let formController = require("../controller/formController");

// authentication
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

        if (existUser.auth.password !== password) {
            return done(null, false, {
                message: "Incorrect password",
            });
        }

        return done(null, existUser);
    })
);

passport.serializeUser(function (user, done) {
    console.log(user);
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    await prisma.user
        .findFirst({
            where: {
                id: id,
            },
        })
        .then((err, user) => {
            done(err, user);
        });
});

function authenticateLocal(req, res, next) {
    // pass callback function to handle error and get errors configured in LocalStrategy
    passport.authenticate("local", function (err, user, info) {
        if (err) return next(err);
        if (!user) {
            return res.status(401).send({
                error: "Invalid Authorization Request",
                message: info,
            });
        }
        req.user = user;
        next();
    })(req, res, next);
}

// authentication route
router.get("/", (req, res) => {
    res.send({ user: req.user });
});

router.post("/login", authenticateLocal, (req, res) => {
    res.send(req.user);
});

//sign up route
router.post("/signup", formController.create_user_post);

module.exports = router;
