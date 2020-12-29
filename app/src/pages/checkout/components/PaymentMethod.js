import React from 'react'
import { Card, Radio, Typography } from 'antd'
import { useCartContext } from '../../../context/CartContex'

const PaymentMethod = () => {
	const { savePaymentMethod, paymentMethod } = useCartContext()

	const handlerChange = (e) => {
		savePaymentMethod(e.target.value)
	}

	return (
		<Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
			<Typography.Title level={4}>PAYMENT METHOD</Typography.Title>
			<Radio.Group onChange={handlerChange} defaultValue={paymentMethod}>
				<Radio value="PayPal">PayPal</Radio>
				<Radio value="Omise">Omise</Radio>
				<Radio value="IBanking">IBanking</Radio>
				<Radio value="Stripe">Stripe</Radio>
			</Radio.Group>
		</Card>
	)
}

export default PaymentMethod
