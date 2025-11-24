import Joi from 'joi';

describe('Joi', () => {
  it("should can custom message", () => {
    const schema = Joi.string().min(3).max(10).required().messages({
      "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
      "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
    });
    const request = "aaaaaaaaaaa";
    console.info(schema.validate(request));
  });
  it("should can custom message object", () => {
    const loginSchema = Joi.object({
      username: Joi.string().min(6).max(100).email().required().messages({
        "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
        "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
        "string.email": "{{#label}} harus berupa email",
        "any.required": "{{#label}} harus diisi",
      }),
      password: Joi.string().min(6).required().messages({
        "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
        "any.required": "{{#label}} harus diisi",
      })
    })
    console.info(loginSchema.validate({
      username: "rahman@gmail.com",
      password: "rahman123"
    }, {
      abortEarly: false
    }));
  });
})