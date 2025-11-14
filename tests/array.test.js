import Joi from 'joi';

describe('Joi', () => {
  it("should can validate array", () => {
    const hobbiesSchema = Joi.array().items(Joi.string().required()).min(1).max(3).required();

    const result = hobbiesSchema.validate(["Coding", "Reading",1], {
      abortEarly: false
    });
    console.info(result);
  });
  it("should can validate array with items object", () => {
    const productObjectSchema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required()
    })
    const productSchema = Joi.array().items(productObjectSchema).min(1).required().unique("name");

    const productObj = [
      {
        name: "Keyboard",
        price: 1_000_000
      },
      {
        name: "Mouse",
        price: 1_000_000
      },
      {
        name: "Monitor",
        price: 1_000_000
      },
    ]
    const result = productSchema.validate(productObj, {
      abortEarly: false
    });
    console.info(result);
  });
})