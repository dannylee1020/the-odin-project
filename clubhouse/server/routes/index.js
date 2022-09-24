let express = require("express");
let passport = require("./auth");
let router = express.Router();
let formController = require("../controller/formController");
let messageController = require("../controller/messageController");

function authenticateLocal(req, res, next) {
    // pass callback function to handle error and get errors configured in LocalStrategy
    passport.authenticate(
        "local",
        { successRedirect: "/" },
        function (err, user, info) {
            if (err) return next(err);
            if (!user) {
                return res.status(401).send({
                    error: "Invalid Authorization Request",
                    message: info,
                });
            }
            //manually estabilishes a session for custom callback
            req.login(user, (err) => {
                if (err) return next(err);
                res.send({ message: "authentication successful" });
            });
        }
    )(req, res, next);
}

// authentication route
router.get("/", (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send({ message: "user not authenticated" });
    }
});

router.post("/login", authenticateLocal);

router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
    });

    res.send({ message: "Log out successful" });
});

//sign up route
router.post("/signup", formController.create_user_post);

//private join route
router.post("/private", (req, res) => {
    req.body.passcode === "opensesame"
        ? res.status(200).send({ message: "success" })
        : res.status(401).send({ message: "Wrong Passcode" });
});

// get messages from database
router.get("/messages", messageController.get_all_message);

router.post("/messages", messageController.create_message);

// delete message for admin
router.post("/delete", messageController.delete_message);

module.exports = router;
