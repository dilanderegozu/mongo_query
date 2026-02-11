const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.post("/createProduct", controller.createProduct);

router.get("/getAllProducts", controller.getAllProduct);
router.get(
  "/getProductsByPriceGreater/:value",
  controller.getProductsByPriceGreater,
);

module.exports = {
  product: router,
};
