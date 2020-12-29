import { Card, Row, Col } from 'antd'
import React from 'react'
import _ from "lodash"
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { useCartContext } from '../../../context/CartContex';


const CartItem = ({ item, deleteItem }) => {
    const { addItem, reduceItem, } = useCartContext()
    const itemTotal = _.get(item, "itemTotal")
    const product = _.get(item, "product")
    const financial = (x) => Number.parseFloat(x).toFixed(2);
    return (
        <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
            <Row gutter={[16, 16]}>
                <Col xs={4}>
                    <img src={product.image} alt="" style={{ width: "100%", objectFit: "contain" }} />
                </Col>
                <Col xs={4}>
                    {product.name}
                </Col>
                <Col xs={4}>
                    Price: {product.price}
                </Col>
                <Col xs={4}>
                    <MinusCircleOutlined onClick={() => reduceItem(product)} style={{ fontSize: "1.2rem", marginRight: "1.5rem", }} />
                    <span>Total: </span>
                    <span>{itemTotal}</span>
                    <PlusCircleOutlined onClick={() => addItem(product)} style={{ fontSize: "1.2rem", marginLeft: "1.5rem", }} />
                </Col>
                <Col xs={4}>
                    <Row >
                        <span>Total Price : </span>
                        <span>{financial(product.price * itemTotal)} </span>
                    </Row>
                </Col>
                <Col xs={4}>
                    <span >
                        <DeleteOutlined
                            onClick={() => deleteItem(product)}
                            style={{ color: "red", fontSize: "1.2rem", marginLeft: "1.5rem", cursor: 'pointer' }}
                        />
                    </span>
                </Col>
            </Row>
        </Card>
    )
}

export default CartItem
