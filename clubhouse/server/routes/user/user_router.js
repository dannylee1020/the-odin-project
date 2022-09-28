let express = require("express");
let { passport, authenticateLocal } = require("../../utils/auth.js");
let router = express.Router();
let formController = require("../../controller/formController");

// authentication route

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

module.exports = router;
