let express = require("express");
let router = express.Router();

const formController = require("../controller/formController");

router.post("/signup", formController.create_user_post);

module.exports = router;
