const express = require("express");
const {
  getProducts,
  getProductsById,
  createProduct,
  updatedProductsById,
  deleteProductById,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);

router.get("/:id", getProductsById);

router.post("/", createProduct);

router.put("/:id", updatedProductsById);

router.delete("/:id", deleteProductById);

module.exports = router;
