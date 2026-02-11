const Product = require("../models/product.model");
const utils = require("../utils/index");

exports.createProduct = async (req) => {
  try {
    const { name, price, category, description } = req.body;
    const product = new Product({
      name,
      price,
      category,
      description,
    });
    await product.save();
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllProduct = async () => {
  try {
    const product = await Product.find();
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductsByPriceGreater = async (req, ) => {
  try {
    const { value } = req.params;
    const product = await Product.find({ price: { $gt: Number(value) } });
    return product;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductByFilter = async (req, ) => {
  try {
    const { val1, val2 } = req.params;
    const products = await Product.find({
      price: {
        $gte: Number(val1),
        $lte: Number(val2),
      },
    });

    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getProductByFilterPrice = async (req, ) => {
  try {
    const { val1 } = req.params;
    const products = await Product.find({ price: { $gte: val1 } });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getQuery = async (req, ) => {
  try {
    const { name, val1, val2 } = req.params;
    const products = await Product.find({
      name: { $eq: name },
      price: {
        $gt: Number(val1),
        $lt: Number(val2),
      },
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getQueryAnd = async (req, ) => {
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

    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getQueryOr = async (req, ) => {
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

    return products;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getQueryFinally = async (req, ) => {
  try {
    const { val1, val2, val3 } = req.params;
    const products = await Product.find({
      description: { $exists: false },
      stock: { $gt: val1, $lt: val2 },
      price: { $gt: val3 },
      name: { $exists: true },
    });
    return products;
  } catch (error) {
    throw new Error(error);
  }
};
