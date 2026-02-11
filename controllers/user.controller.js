const { StatusCodes } = require("http-status-codes");
const baseResponse = require("../dto/baseResponse.dto");
const userService = require("../services/index");
const utils = require("../utils/index");

exports.register = async (req, res) => {
  try {
    const isInvalid = utils.handleValidation(req);
    if (isInvalid) {
      return res 
        .status(StatusCodes.BAD_REQUEST)
        .json(isInvalid); 
    }

    const data = await userService.userService.register(req);
    return res 
      .status(StatusCodes.CREATED)  
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Kayıt başarılı",
        code: StatusCodes.CREATED,
      });
  } catch (error) {
    return res 
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
  }
};

exports.login = async (req, res) => {
  try {
    const data = await userService.userService.login(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Giriş başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const data = await userService.userService.updateUser(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Güncelleme başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const data = await userService.userService.deleteUser(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Silme başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const data = await userService.userService.getAllUsers(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Kullanıcılar listelendi",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.sorgu1 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu1(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Sorgu başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.sorgu2 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu2(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Sorgu başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.sorgu3 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu3(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Sorgu başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
exports.sorgu4 = async (req, res) => {
  try {
    const data = await userService.userService.sorgu4(req);
    res
      .json({
        ...baseResponse,
        data: data,
        timestamp: new Date(),
        message: "Sorgu başarılı",
        code: StatusCodes.OK,
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};
