
import { Row, Col } from 'antd'
import React from 'react'
import DeliveryAddress from './components/DeliveryAddress'
import OrderList from './components/OrderList'
import PaymentMethod from './components/PaymentMethod'

const Checkout = () => {
    return (
        <div>
            <Row gutter={[18, 18]}>
                <Col xs={10}>
                    <DeliveryAddress />
                    <PaymentMethod />
                </Col>
                <Col xs={14}><OrderList />
                </Col>
            </Row>
        </div>
    )
}

export default Checkout
