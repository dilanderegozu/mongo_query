const router = require("express").Router();
const controller = require("../controllers/product.controller");

router.post("/createProduct", controller.createProduct);

router.get("/getAllProducts", controller.getAllProduct);
router.get(
  "/getProductsByPriceGreater/:value",
  controller.getProductsByPriceGreater,
);
router.get("/getProductByFilter/:val1/:val2", controller.getProductByFilter);
router.get("/getProductByFilterPrice/:val1",controller.getProductByFilterPrice)
router.get('/getQuery/:name/:val1/:val2', controller.getQuery);
router.get("/getQueryAnd/:name/:val1/:val2",controller.getQueryAnd)
router.get("/getQueryOr/:name/:val1/:val2",controller.getQueryOr)
router.get("/getQueryFinally/:val1/:val2/:val3",controller.getQueryFinally)
module.exports = {
  product: router,
};
