import React, { useState, useEffect } from 'react'
import { Card, Typography, Row, Col, Button, message } from "antd"
import { useCartContext } from '../../../context/CartContex'
import { useAuthContext } from '../../../context/AuthContext'

const SummaryOrder = () => {
	const { cart, paymentMethod, shippingAddress, cartItemTotal } = useCartContext()
	const { user } = useAuthContext()
	const { createOrder } = useOrderContext()
	const [submitButton, setSubmitButton] = useState(false)

	useEffect(() => {
		defineOrder()
	}, [])

	useEffect(() => {
		defineOrder()
	}, [paymentMethod, shippingAddress])

	const defineOrder = () => {
		const orderItems = cart.map(cartItem => {
			return {
				name: cartItem.product.name,
				qty: cartItem.itemTotal,
				image: cartItem.product.image,
				price: cartItem.product.price,
				product: cartItem.procut._id
			}
		})

		const totalPrice = cart.reduce((total, element) => total + (element.product.price * element.itemTotal), 0)

		const order = {
			orderItems,
			shippingAddress: shippingAddress,
			paymentMethod: paymentMethod,
			itemsPrice: cart.itemsPrice,
			shippingPrice: 10,
			taxPrice: 10,
			totalPrice,
		}

	}
	const submitOrder = async () => {
		setSubmitButton(true)

		const result = await createOrder(order)
		if (result.complete) {
			message.success(result.message)
			setSubmitButton(false)
			return
		}
		message.error(result.message)

		setSubmitButton(false)
	}


	return (
		<Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
			<Typography.Title level={4}>SUMMARY ORDER</Typography.Title>
			<Row justify="end">
				<Col xs={8}>
					<Button disabled={submitButton} disabled={true} type="primary" block onClick={submitOrder}>SUBMMIT ORDER</Button>
				</Col>
			</Row>
		</Card>
	)
}

export default SummaryOrder
