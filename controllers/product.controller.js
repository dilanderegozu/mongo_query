const { StatusCodes } = require("http-status-codes");
const productService = require("../services/index");
const BaseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/index")

exports.createProduct = async (req, res) => {
  try {
    const isInvalid = utils.handleValidation(req)
     if (isInvalid) {
      return res 
        .status(StatusCodes.BAD_REQUEST)
        .json(isInvalid); 
    }
    const data = await productService.productService.createProduct(req);
    return res
      .status(StatusCodes.CREATED)
      .json(BaseResponse.success(data, "Ürün başarıyla oluşturuldu", StatusCodes.CREATED));
  } catch (error) {
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(BaseResponse.error("Ürün oluşturulamadı", error.message));
  }
};

exports.getAllProduct = async (req, res) => {
  try {
    const data = await productService.productService.getAllProduct();
    return res
      .status(StatusCodes.OK)
      .json(BaseResponse.success(data, "Ürünler başarıyla listelendi"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("Ürünler listelenemedi", error.message));
  }
};

exports.getProductsByPriceGreater = async (req, res) => {
  try {
    const data = await productService.productService.getProductsByPriceGreater(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "Filtreli ürünler listelendi"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("Hata oluştu", error.message));
  }
};

exports.getProductByFilter = async (req, res) => {
  try {
    const data = await productService.productService.getProductByFilter(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "Aralık filtresi uygulandı"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("Hata oluştu", error.message));
  }
};

exports.getProductByFilterPrice = async (req, res) => {
  try {
    const data = await productService.productService.getProductByFilterPrice(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "Fiyat filtresi uygulandı"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("Hata oluştu", error.message));
  }
};

exports.getQuery = async (req, res) => {
  try {
    const data = await productService.productService.getQuery(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "Sorgu başarıyla çalıştı"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("Sorgu hatası", error.message));
  }
};

exports.getQueryAnd = async (req, res) => {
  try {
    const data = await productService.productService.getQueryAnd(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "AND sorgusu başarılı"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("AND sorgu hatası", error.message));
  }
};

exports.getQueryOr = async (req, res) => {
  try {
    const data = await productService.productService.getQueryOr(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "OR sorgusu başarılı"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("OR sorgu hatası", error.message));
  }
};

exports.getQueryFinally = async (req, res) => {
  try {
    const data = await productService.productService.getQueryFinally(req);
    return res.status(StatusCodes.OK).json(BaseResponse.success(data, "Final sorgusu başarılı"));
  } catch (error) {
    return res.status(500).json(BaseResponse.error("Final sorgu hatası", error.message));
  }
};