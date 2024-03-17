const express=require('express');
const router=express.Router();
const adminController=require("../controller/admin-controller");
const authMiddleware=require("../middleware/auth-middleware");
const adminMiddleware=require("../middleware/admin-middleware");

router.route("/users").get(authMiddleware, adminMiddleware, adminController.getAllUsers);
router.route("/users/update/:id").patch(authMiddleware, adminMiddleware, adminController.updateUser);
router.route("/users/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteUser);
router.route("/user/:id").get(authMiddleware, adminMiddleware, adminController.getUserByID);
router.route("/contacts").get(authMiddleware,adminMiddleware, adminController.getAllContacts);
router.route("/contacts/delete/:id").delete(authMiddleware,adminMiddleware, adminController.deleteContacts);

module.exports=router;