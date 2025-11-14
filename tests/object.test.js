import Joi from 'joi';

describe('Joi', () => {
  it("should can validate object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().min(6).max(100).email().required(),
      password: Joi.string().min(6).required()
    })
    const payload = {
      username: 'rahman@gmail.com',
      password: 'rahman123',
    }
    const result = loginSchema.validate(payload, {
      abortEarly: false
    })
    console.info(result);
    if (result.error) {
      result.error.details.forEach((detail) => console.info(`${detail.path} = ${detail.message}`));
    }
  });
  it("should can validate nested object", () => {
    const createUserSchema = Joi.object({
      id: Joi.string().max(100).required(),
      name: Joi.string().max(100).required(),
      address: Joi.object({
        street: Joi.string().max(200).required(),
        city: Joi.string().max(100).required(),
        country: Joi.string().max(100).required(),
        zipCode: Joi.string().max(100).required(),
      }).required(),
    });

    const request = {}
    const result = createUserSchema.validate(request, {
      abortEarly: false
    });
    console.info(result);
    if (result.error) {
      result.error.details.forEach((detail) => console.info(`${detail.path} = ${detail.message}`));
    }
  })
})