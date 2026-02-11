const { body, param } = require("express-validator");

const productValidator = {
  validateCreateProduct() {
    return [
      body("name").not().isEmpty(),
      body("price").not().isEmpty().isNumeric(),
      body("category").not().isEmpty(),
      body("description").not().isEmpty().isLength({ min: 3, max: 250 }),
      body("stock").not().isEmpty().isNumeric(),
    ];
  },
  validateGetProductsByPriceGreater() {
    return [param("value").not().isEmpty()];
  },
  validateGetProductByFilter() {
    return [param("val1").not().isEmpty(), param("val2").not().isEmpty()];
  },
  validateGetProductByFilterPrice() {
    return [param("val1").not().isEmpty()];
  },
  validateGetQuery() {
    return [param("val1").not().isEmpty(), param("val2").not().isEmpty()];
  },
  validategetQueryAnd() {
    return [
      param("val1").not().isEmpty(),
      param("val2").not().isEmpty(),
      param("name").not().isEmpty(),
    ];
  },
  validategetQueryOr() {
    return [
      param("val1").not().isEmpty(),
      param("val2").not().isEmpty(),
      param("name").not().isEmpty(),
    ];
  },
  validateGetQueryFinally() {
    return [
      param("val1").not().isEmpty(),
      param("val2").not().isEmpty(),
      param("val3").not().isEmpty(),
    ];
  },
};

module.exports = productValidator;
