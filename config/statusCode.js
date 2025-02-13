class BadRequestError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
    this.name = 'BadRequestError';
  }
}

class ConflictError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 409;
    this.name = 'ConflictError';
  }
}

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
    this.name = 'NotFoundError';
  }
}

class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 500;
    this.name = 'InternalServerError';
  }
}

class OkResponse extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 200;
    this.name = 'OkResponse';
  }
}

class CreatedResponse extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 201;
    this.name = 'CreatedResponse';
  }
}

module.exports = {
  BadRequestError,
  ConflictError,
  NotFoundError,
  InternalServerError,
  OkResponse,
  CreatedResponse,
};
