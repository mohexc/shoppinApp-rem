import { Card, Row, Col } from 'antd'
import React from 'react'
import _ from "lodash"

const OrderCard = ({ order }) => {
    console.log(order)
    debugger
    const totalOrder = _.get(order, "totalOrder")
    const product = _.get(order, "product")
    return (
        <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
            <Row gutter={[16, 16]}>
                <Col xs={16}>
                    <Row gutter={[16, 16]}>
                        <Col xs={4}>
                            <img src={product.image} alt="" style={{ width: "100%", objectFit: "contain" }} />
                        </Col>
                        <Col xs={10}>
                            {product.name}
                        </Col>
                        <Col xs={8}>

                        </Col>
                    </Row>

                </Col>

                <Col xs={8}>
                    <Row>
                        <span>Total: </span>
                        <span>{totalOrder}</span>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default OrderCard
