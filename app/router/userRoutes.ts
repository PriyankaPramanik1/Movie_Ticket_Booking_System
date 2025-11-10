import express from 'express';
import { userController } from '../controllers/userController';
import { protect, authorizeRoles } from '../middleware/authMiddleaware';
import upload from '../middleware/uploadMiddleware';

const router = express.Router()


router.post('/register', upload.single('profilePicture'), userController.register)
router.get('/verify-email/:token', userController.verifyEmail);
router.post('/login', userController.login)

router.get('/profile', protect, authorizeRoles('admin','user'), userController.getUserprofile)
router.get('/profile/:id', protect, authorizeRoles('admin','user'), userController.getUserById)

router.put('/profile/:id', protect, authorizeRoles('admin','user'), upload.single('profilePicture'), userController.updateProfile);



export { router }