import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from "../utils/generateToken.js"

// @desc        Auth user & get token
// @route       Post /api/users/login
// @access      Public
const authUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body
    const user = await User.findOne({ email })
    console.log(req.body)
    if (user && (await user.matchPassword(password))) {

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid email or password')
    }
})

// @desc        Register a new user
// @route       Post /api/users/register
// @access      Public
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }
    const user = await User.create({ name, email, password })
    if (user) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }

})

// @desc        Get user profile
// @route       GET /api/users/login
// @access      Private
const getUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)
    if (user) {
        res.json({
            id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }
    else {
        res.status(404)
        throw new Error('User not found ')
    }
})

// @desc        update user profile
// @route       PUT /api/users/profile
// @access      Private
const updatetUserProfile = asyncHandler(async (req, res) => {

    const user = await User.findById(req.user._id)

    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updateUser = await user.save()

        res.json({
            id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            isAdmin: updateUser.isAdmin,
            token: generateToken(updateUser._id)
        })

    }
    else {
        res.status(404)
        throw new Error('User not found ')
    }
})
export { authUser, registerUser, getUserProfile, updatetUserProfile }