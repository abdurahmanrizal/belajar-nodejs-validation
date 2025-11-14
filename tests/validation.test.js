import Joi from 'joi';

describe('Joi', () => {
  it("can create schema", () => {
    const schema = Joi.string().min(3).max(100).required();

    const result = schema.validate("");
    if(result.error) {
      console.info(result.error);
    }
  });
  it("can validate data type", () => {
    const usernameSchema = Joi.string().email().required();
    const isAdminSchema = Joi.boolean().required();
    const priceSchema = Joi.number().required().min(1_000).max(1_000_000);

    const resultUsername = usernameSchema.validate("rahman@gmail.com");
    console.info(resultUsername);
    const resultIsAdmin = isAdminSchema.validate(true);
    console.info(resultIsAdmin);
    const resultPrice = priceSchema.validate(1_000_000);
    console.info(resultPrice);
  })
})