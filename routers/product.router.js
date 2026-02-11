const router = require("express").Router();
const controller = require("../controllers/product.controller");
const productValidator= require("../validations/index")

router.post("/createProduct", [productValidator.productValidator.validateCreateProduct()],controller.createProduct);

router.get("/getAllProducts", controller.getAllProduct);
router.get(
  "/getProductsByPriceGreater/:value",[productValidator.productValidator.validateGetProductsByPriceGreater()],
  controller.getProductsByPriceGreater,
);
router.get("/getProductByFilter/:val1/:val2", [productValidator.productValidator.validateGetProductByFilter()],controller.getProductByFilter);
router.get("/getProductByFilterPrice/:val1",[productValidator.productValidator.validateGetProductByFilterPrice()],controller.getProductByFilterPrice)
router.get('/getQuery/:name/:val1/:val2', [productValidator.productValidator.validateGetQuery()],controller.getQuery);
router.get("/getQueryAnd/:name/:val1/:val2",[productValidator.productValidator.validategetQueryAnd()],controller.getQueryAnd)
router.get("/getQueryOr/:name/:val1/:val2",[productValidator.productValidator.validategetQueryOr()],controller.getQueryOr)
router.get("/getQueryFinally/:val1/:val2/:val3",[productValidator.productValidator.validateGetQueryFinally()],controller.getQueryFinally)
module.exports = {
  product: router,
};
