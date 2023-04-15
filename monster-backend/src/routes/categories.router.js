const express = require("express");
const router = express.Router();

const categoriesController = require("../controllers/categories.controller");

router.get("/", categoriesController.getAllCategories);

router.post("/", categoriesController.createCategory);

router.put("/:id", categoriesController.updateCategory);

router.get("/:id", categoriesController.getCategoryById);

router.delete("/:id", categoriesController.deleteCategoryById);

module.exports = router;
