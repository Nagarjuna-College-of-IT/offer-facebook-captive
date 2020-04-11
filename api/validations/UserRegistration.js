const Joi = require("@hapi/joi");

const validateRegistration = (data) => {
  const schema = Joi.object({
    full_name: Joi.string().required().min(7).max(30),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com"] },
    }).required(),
    password: Joi.string().required().min(8).max(15),
  });

  return schema.validate(data)
};

module.exports = validateRegistration;