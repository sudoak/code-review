const createError = require('http-errors');

const { BadRequest } = createError;

const validate = (schema, payload) => {
  const { error } = schema.validate(payload);
  return error;
};

const schemaValidator = schemas => (req, res, next) => {
  const sections = Object.keys(schemas);
  const result = sections.reduce((errorMessage, section) => {
    const schema = schemas[section];
    const payload = req[section];
    const error = validate(schema, payload);
    return error ? new BadRequest(error.message) : errorMessage;
  }, null);
  return next(result);
};

module.exports = schemaValidator;
