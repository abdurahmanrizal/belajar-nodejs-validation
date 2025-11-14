import Joi from 'joi';

describe('Joi', () => {
  it("should can validate date type", () => {
    const birthDaySchema = Joi.date().min('1974-01-01').max("now").required();

    const resultBirthdayFirst = birthDaySchema.validate("1973-01-01");
    console.info(resultBirthdayFirst);
    const resultBirthdaySecond = birthDaySchema.validate("1998-01-13");
    console.info(resultBirthdaySecond);
  })
})