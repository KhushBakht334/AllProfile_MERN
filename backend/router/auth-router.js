const express=require('express');
const router=express.Router();
const authController=require('../controller/auth-controller');
const {signupSchema,loginSchema}=require('../validation/auth-validator');
const validate=require("../middleware/validate-middleware");
const authMiddleware=require("../middleware/auth-middleware");

router.route('/register').post(validate(signupSchema), authController.register);
router.route('/login').post(validate(loginSchema), authController.login);
router.route('/userdata').get(authMiddleware, authController.user);

module.exports=router;