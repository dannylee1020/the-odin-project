let express = require("express");
let router = express.Router();
let messageController = require("../../controller/messageController");

// get messages from database
router.get("/messages", messageController.get_all_message);

router.post("/messages", messageController.create_message);

// delete message for admin
router.post("/delete", messageController.delete_message);

module.exports = router;
