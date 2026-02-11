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
      .json(BaseResponse.success(product, "Ürün başarıyla listelendi"));
  } catch (error) {
    res.status(500).json("Ürünler listelenemedi", error.message, 500);
  }
};

exports.getProductsByPriceGreater = async (req, res) => {
  try {
    const { value } = req.params;
    const product = await Product.find({ price: { $gt: Number(value) } });
    return res
      .status(StatusCodes.OK)
      .json(BaseResponse.created(product, "Ürün başarıyla listelendi"));
  } catch (error) {
    res.status(500).json("Ürünler listelenemedi", error.message, 500);
  }
};

exports.getProductByFilter = async (req, res) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({
      price: {
        $gte: Number(val1),
        $lte: Number(val2),
      },
    });

    return res
      .status(StatusCodes.OK)
      .json(BaseResponse.success(products, `${products.length} ürün bulundu`));
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(BaseResponse.error("Ürünler listelenemedi", error.message));
  }
};

exports.getProductByFilterPrice = async (req, res) => {
  try {
    const { val1 } = req.params;
    const products = await Product.find({ price: { $gte: val1 } });
    res
      .status(StatusCodes.OK)
      .json(BaseResponse.success(products, "Ürünler listelendi", 200));
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(BaseResponse.error("Ürünler listelenemedi", error.message));
  }
};

exports.getQuery = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;
    const products = await Product.find({
      name: { $eq: name },
      price: {
        $gt: Number(val1),
        $lt: Number(val2),
      },
    });
    res
      .status(StatusCodes.OK)
      .json(
        BaseResponse.success(
          products,
          "Sorgu başarıyla çalıştı",
          StatusCodes.OK,
        ),
      );
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        BaseResponse.error(
          "Sorgulama başarısız",
          error.message,
          StatusCodes.INTERNAL_SERVER_ERROR,
        ),
      );
  }
};

exports.getQueryAnd = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;

    const products = await Product.find({
      $and: [
        { name: { $eq: name } },
        { stock: { $exists: true } },
        {
          price: {
            $gte: Number(val1),
            $lte: Number(val2),
          },
        },
      ],
    });

    res
      .status(StatusCodes.OK)
      .json(
        BaseResponse.success(
          products,
          "Sorgu başarıyla çalıştı",
          StatusCodes.OK,
        ),
      );
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        BaseResponse.error(
          "Sorgulama başarısız",
          error.message,
          StatusCodes.INTERNAL_SERVER_ERROR,
        ),
      );
  }
};

exports.getQueryOr = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;

    const products = await Product.find({
      $or: [
        { name: { $eq: name } },
        { stock: { $exists: true } },
        {
          price: {
            $gte: Number(val1),
            $lte: Number(val2),
          },
        },
      ],
    });

    res
      .status(StatusCodes.OK)
      .json(
        BaseResponse.success(
          products,
          "Sorgu başarıyla çalıştı",
          StatusCodes.OK,
        ),
      );
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        BaseResponse.error(
          "Sorgulama başarısız",
          error.message,
          StatusCodes.INTERNAL_SERVER_ERROR,
        ),
      );
  }
};

exports.getQueryFinally = async (req, res) => {
  try {
    const { val1, val2, val3 } = req.params;
    const products = await Product.find({
      description: { $exists: false },
      stock: { $gt: val1, $lt: val2 },
      price: { $gt: val3 },
      name: { $exists: true },
    });
    res
      .status(StatusCodes.OK)
      .json(
        BaseResponse.success(
          products,
          "Sorgu başarıyla çalıştı",
          StatusCodes.OK,
        ),
      );
  } catch(error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(
        BaseResponse.error(
          "Sorgu başarısız",
          error.message,
          StatusCodes.INTERNAL_SERVER_ERROR,
        ),
      );
  }
};
