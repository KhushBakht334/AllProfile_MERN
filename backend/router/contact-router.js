const express=require('express');
const router=express.Router();
const contactController=require('../controller/contact-controller');

router.route('/form').post(contactController.form);

module.exports=router;