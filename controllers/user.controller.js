const { StatusCodes } = require("http-status-codes");
const BaseResponse = require("../dto/baseResponse.dto");
const userService = require("../services/index");

exports.register = async (req, res) => {
  try {
    const data = await userService.userService.register(req, res);
    res
      .json({
        ...BaseResponse,
        data: data,
        timestamp: new Date(),
        message: "Kayıt başarılı",
        code: StatusCodes.CREATED,
      })
      .status(StatusCodes.CREATED);
  } catch (error) {
    res
      .json({
        ...BaseResponse,
        error: true,
        success: false,
        timestamp: new Date(),
        code: StatusCodes.INTERNAL_SERVER_ERROR,
        message: error.message,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

