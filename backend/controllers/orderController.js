import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc        Fetch all products
// @route       GET /api/products
// @access      Public
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    } = rea.body

    if(orderItems && orderItems.length === 0){
        res.status(4000)
        throw new Error('No order Item')
        
    }
    else {
        const order = new Order({
            orderItems,
            user: req.user._id,
            shippingAddress,
            paymentMethod,
            taxPrice,
            shippingPrice,
            totalPrice
        })

        const createdOrder = await order.save()

    }

    res.json(products)
})

export { addOrderItems }