var express = require("express");
var router = express.Router();

let categoryController = require("../controllers/categoryController");
let creatorController = require("../controllers/creatorController");
let itemController = require("../controllers/itemController");

router.get("/", function (req, res) {
    res.render("./pages/index", { title: " Welcome to Tech Catalog" });
});

// routes for category
router.get("/category", categoryController.category_list);

// routes for creator
router.get("/creator");

// routes for items
router.get("/items");

module.exports = router;
