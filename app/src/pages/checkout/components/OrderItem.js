import React from 'react'
import { Row, Col } from 'antd'
import _ from 'lodash'

// main
const OrderItem = ({ orderItem }) => {
    const product = _.get(orderItem, 'product')
    const itemTotal = _.get(orderItem, 'itemTotal')
    return (
        <Row gutter={[24, 24]}>
            <Col xs={3} className="flex-center">
                <img src={product.image} alt="" style={{ height: '50px', objectFit: "contain" }} />
            </Col>
            <Col xs={9} className="flex-center">
                {product.name}
            </Col>
            <Col xs={4} className="flex-center">
                <span>{product.price}</span>
            </Col>
            <Col xs={4} className="flex-center">
                <span>{itemTotal}</span>
            </Col>
            <Col xs={4} className="flex-center">
                {itemTotal * product.price}
            </Col>
        </Row>
    )
}

export default OrderItem
