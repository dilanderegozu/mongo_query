class BaseResponse {
  constructor(success, code, message, data = null, error = null) {
    this.success = success;
    this.code = code;
    this.message = message;
    this.data = data;
    this.error = error;
    this.timestamp = new Date().toISOString();
  }

 
  static success(data, message = "Request successful", code = 200) {
    return new BaseResponse(true, code, message, data, null);
  }

  static created(data, message = "Created successfully", code = 201) {
    return new BaseResponse(true, code, message, data, null);
  }


  static error(message = "Request failed", error = null, code = 500) {
    return new BaseResponse(false, code, message, null, error);
  }

  static badRequest(message = "Bad request", error = null, code = 400) {
    return new BaseResponse(false, code, message, null, error);
  }

  static unauthorized(message = "Unauthorized access", error = null, code = 401) {
    return new BaseResponse(false, code, message, null, error);
  }

  static forbidden(message = "Forbidden", error = null, code = 403) {
    return new BaseResponse(false, code, message, null, error);
  }

  static notFound(message = "Resource not found", error = null, code = 404) {
    return new BaseResponse(false, code, message, null, error);
  }

  static conflict(message = "Conflict", error = null, code = 409) {
    return new BaseResponse(false, code, message, null, error);
  }
}

module.exports = BaseResponse;