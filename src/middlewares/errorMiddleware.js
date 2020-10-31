const HttpStatus = require('http-status-codes');

const { getStatusText } = HttpStatus;

// eslint-disable-next-line no-unused-vars
const errorMiddleware = (err, req, res, _) => {
  const errorCode = err.statusCode || 500;
  return res.status(errorCode).json({
    statusCode: errorCode,
    code: getStatusText(errorCode),
    message: err.message
  });
};

module.exports = errorMiddleware;
