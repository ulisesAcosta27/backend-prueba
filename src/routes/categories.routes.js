const router = require("express").Router();
const {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateOneCategory,
  getOneCategory,
} = require("../controllers/categories.controllers");

router.get("/products/category/", getAllCategory);
router.get("/products/category/:nombreCat", getOneCategory);
router.post("/products/category/", createCategory);
router.put("/products/category/:id", updateOneCategory);
router.delete("/products/category/:id", deleteCategory);

module.exports = router;