const { z } = require('zod');

const signupSchema = z.object({
    username: z
    .string({required_error: "Name is required"})
    .trim()
    .min(3, {message: "Name must be at least 3 characters"})
    .max(255, {message: "Name must not be more than 255 characters"}),
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "Invalid email address"})
    .min(10, {message: "email must be at least 20 characters"})
    .max(255, {message: "email must not be more than 255 characters"}),
    phone: z
    .string({required_error: "phone is required"})
    .trim()
    .min(4, {message: "phone must be at least 4 characters"})
    .max(6, {message: "phone must not be more than 6 characters"}),
    password: z
    .string({required_error: "password is required"})
    .trim()
    .min(4, {message: "password must be at least 4 characters"})
    .max(6, {message: "password must not be more than 6 characters"}),
});
const loginSchema= z.object({
    email: z
    .string({required_error: "email is required"})
    .trim()
    .email({message: "Invalid email address"}),
    password: z
    .string({required_error: "password is required"})
    .trim()
  });

  module.exports={signupSchema, loginSchema};