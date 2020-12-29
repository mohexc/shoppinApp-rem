import React from 'react'
import { Card, Form, Radio } from 'antd'

const PaymentMethod = () => {
    return (
        <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
            <Form onFinish>
                <Form.Item name="paymentMethod" label="Payment Mothod">
                    <Radio.Group def>
                        <Radio value="PayPal">PayPal</Radio>
                        <Radio value="Omise">Omise</Radio>
                        <Radio value="IBanking">IBanking</Radio>
                        <Radio value="Stripe">Stripe</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default PaymentMethod
