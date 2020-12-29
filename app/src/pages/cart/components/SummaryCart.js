import React from 'react'
import { Card, Button, Row, Col } from 'antd'
import { useCartContext } from '../../../context/CartContex'
import { useHistory } from "react-router-dom"
const SummaryCart = () => {
    const history = useHistory()
    const { cart, cartItemTotal, } = useCartContext()
    const financial = (x) => Number.parseFloat(x).toFixed(2);
    const totalPrice = cart.reduce((total, element) => total + (element.product.price * element.itemTotal), 0)
    return (
        <Card style={{
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            marginBottom: "0.5rem",
            position: 'sticky',
            zIndex: 1,
            width: '100%',
            bottom: '0px'
        }}>
            <Row gutter={[16, 16]}>
                <Col xs={10}>
                    Total Item : {cartItemTotal}
                </Col>
                <Col xs={10}>
                    Total Price : {financial(totalPrice)}
                </Col>
                <Col xs={4}>
                    <Button onClick={() => history.push(`/checkout`)} type="primary" block >order a purchase</Button>
                </Col>
            </Row>
        </Card>
    )
}

export default SummaryCart
