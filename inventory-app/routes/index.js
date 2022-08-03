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

router.get("/category/create", categoryController.create_category_get);

router.post("/category/create", categoryController.create_category_post);

router.get("/category/:id", categoryController.category_details);

router.get("/category/:id/delete", categoryController.delete_category_get);

router.post("/category/:id/delete", categoryController.delete_category_post);

router.get("/category/:id/update", categoryController.update_category_get);

router.post("/category/:id/update", categoryController.update_category_post);

// routes for creator
router.get("/creator", creatorController.creator_list);

router.get("/creator/create", creatorController.create_creator_get);

router.post("/creator/create", creatorController.create_creator_post);

router.get("/creator/:id", creatorController.creator_detail);

router.get("/creator/:id/delete", creatorController.delete_creator_get);

router.post("/creator/:id/delete", creatorController.delete_creator_post);

router.get("/creator/:id/update", creatorController.update_creator_get);

router.post("/creator/:id/update", creatorController.update_creator_post);

// routes for items
router.get("/items", itemController.item_list);

router.get("/items/create", itemController.create_item_get);

router.get("/items/:id", itemController.item_detail);

module.exports = router;
