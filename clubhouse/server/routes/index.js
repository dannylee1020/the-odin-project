let express = require("express");
let router = express.Router();

router.get("/user", (req, res) => {
    if (req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send({ message: "user not authenticated" });
    }
});

module.exports = router;
