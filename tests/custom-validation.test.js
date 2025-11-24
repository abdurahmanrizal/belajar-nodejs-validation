import Joi from 'joi';

describe('Joi', () => {
  it("should can custom validation", () => {
    const registerSchema = Joi.object({
      username: Joi.string().min(3).max(100).email().required(),
      password: Joi.string().min(6).max(100).required().custom((value, helper) => {
        if (value.startsWith("rahman")) {
          return helper.error("password.wrong");
        }
        return value;
      }).messages({
        "password.wrong": "password must not start with rahman"
      }),
      confirmPassword: Joi.string().min(6).max(100).required()
    }).custom((value, helper) => {
      if (value.password !== value.confirmPassword) {
        return helper.error("password.notMatch");
      }
      return value;
    }).messages({
      "password.notMatch": "password and confirm password not match"
    })
    console.info(registerSchema.validate({
      username: "rahman@gmail.com",
      password: "eko123",
      confirmPassword: "eko123"
    }, {
      abortEarly: false
    }))
    // const loginSchema = Joi.object({
    //   username: Joi.string().min(6).max(100).email().required().messages({
    //     "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
    //     "string.max": "{{#label}} panjang harus maksimal {{#limit}} karakter",
    //     "string.email": "{{#label}} harus berupa email",
    //     "any.required": "{{#label}} harus diisi",
    //   }),
    //   password: Joi.string().min(6).required().messages({
    //     "string.min": "{{#label}} panjang harus minimal {{#limit}} karakter",
    //     "any.required": "{{#label}} harus diisi",
    //   })
    // })
    // console.info(loginSchema.validate({
    //   username: "rahman@gmail.com",
    //   password: "rahman123"
    // }, {
    //   abortEarly: false
    // }));
  });
})