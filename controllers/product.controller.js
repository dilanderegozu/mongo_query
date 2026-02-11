const { StatusCodes } = require("http-status-codes");
const Product = require("../models/product.model");
const BaseResponse = require("../dto/baseResponse.dto");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    const product = new Product({
      name,
      price,
      category,
      description,
    });
    await product.save();
    return res
      .status(StatusCodes.CREATED)
      .json(BaseResponse.created(product, "Ürün başarıyla oluşturuldu"));
  } catch (error) {
    return res
      .status(500)
      .json(baseResponse.error("Ürün oluşturulamadı", error.message, 500));
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const product = await Product.find();
    return res
      .status(StatusCodes.OK)
      .json(BaseResponse.created(product, "Ürün başarıyla listelendi"));
  } catch (error) {
    res.status(500).json("Ürünler listelenemedi", error.message, 500);
  }
};
// tüm ürünlerden fiyatı 1000den büyük
//$gt den daha büyük gte eşit mi diye soruyor lt küçük 

exports.getProductsByPriceGreater = async (req, res) => {
  try {
    const { value } = req.params;
    const product = await Product.find({ price: { $gt: value } });
     return res
      .status(StatusCodes.OK)
      .json(BaseResponse.created(product, "Ürün başarıyla listelendi"));
  } catch (error) {
    res.status(500).json("Ürünler listelenemedi", error.message, 500);
  }
};
