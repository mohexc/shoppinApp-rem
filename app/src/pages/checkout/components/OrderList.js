import React from 'react'
import { Row, Card, Typography, Col } from 'antd'
import { useCartContext } from '../../../context/CartContex'
import OrderItem from './OrderItem'
// main
const OrderList = () => {
    const { cart } = useCartContext()
    return (
        <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
            <Typography.Title level={4}> Order List</Typography.Title>
            <Row gutter={[24, 24]}>
                <Col xs={3}>

                </Col>
                <Col xs={9} className="flex-center">
                    Name
                </Col>
                <Col xs={4} className="flex-center">
                    <span>Price</span>
                </Col>
                <Col xs={4} className="flex-center">
                    <span>Item Total</span>
                </Col>
                <Col xs={4} className="flex-center">Total Price</Col>
            </Row>
            {cart.map(orderItem => <OrderItem orderItem={orderItem} />)}
        </Card>
    )
}

export default OrderList
