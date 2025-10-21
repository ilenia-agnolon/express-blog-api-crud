const express = require("express");
const router = express.Router();

//import del controller
const postsController = require("../controllers/postsController");

//rotte CRUD (Create, Read, Update, Delete) collegate alle funzioni del controller
router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.store);
router.put("/:id", postsController.update);
router.patch("/:id", postsController.modify);
router.delete("/:id", postsController.destroy);

module.exports = router;
