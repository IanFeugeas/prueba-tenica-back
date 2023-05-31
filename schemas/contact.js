import Joi from "joi";

const schema = Joi.object({
    name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The name must be at least 3 characters',
                'string.empty': 'The name cannot be empty',
                'any.required': 'A name is required'
            },
        ),
    last_name: Joi
        .string()
        .required()
        .min(3)
        .messages(
            {
                'string.min': 'The name must be at least 3 characters',
                'string.empty': 'The name cannot be empty',
                'any.required': 'A name is required'
            },
        ),
    email: Joi
        .string()
        .min(8)
        .email({ minDomainSegments: 2  })
        .messages(
            {
                "string.min": "The mail must be at least 8 characters",
                "string.empty": "The mail cannot be empty",
            }
        ),
    phone: Joi
        .number()
        .required()
        .min(0)
        .messages(
            {
                "number.min": "The phone must have at least 1 number",
                "number.required": "the phone is required"
            }
        ),
    date: Joi
        .array(),
    address: Joi
        .string(),
    type_of_contact: Joi
        .string(),
    origin: Joi
        .string(),
})
export default schema
