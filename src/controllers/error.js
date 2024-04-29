class APIError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }
class BadRequestError extends APIError {
  constructor(message) {
    super(message, 400);
  }
}

class UnAuthenticatedError extends APIError {
  constructor(message) {
    super(message, 401);
  }
}
module.exports = {BadRequestError,UnAuthenticatedError
}
