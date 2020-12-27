import express from 'express'
import { authUser, registerUser, getUserProfile, updatetUserProfile } from "../controllers/userController.js"
import { protect } from '../middleware/authMiddleware.js'
const router = express.Router()

router.post('/login', authUser)
router.route('/register').post(registerUser)
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updatetUserProfile)

export default router