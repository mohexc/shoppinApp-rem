import React from 'react'
import { Card, Typography, Row, Col, Button } from "antd"
import { useCartContext } from '../../../context/CartContex'
import { useAuthContext } from '../../../context/AuthContext'

const SummaryOrder = () => {
	const { cart } = useCartContext()
	const { user } = useAuthContext()

	const order = {


		orderItems: cart.cartItems,
		shippingAddress: cart.shippingAddress,
		paymentMethod: cart.paymentMethod,
		itemsPrice: cart.itemsPrice,
		shippingPrice: cart.shippingPrice,
		taxPrice: cart.taxPrice,
		totalPrice: cart.totalPrice
	}
	return (
		<Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
			<Typography.Title level={4}>SUMMARY ORDER</Typography.Title>
			<Row justify="end">
				<Col xs={8}>
					<Button type="primary" block>SUBMMIT ORDER</Button>
				</Col>
			</Row>
		</Card>
	)
}

export default SummaryOrder
