import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from "react-router-dom";
import { Row, Col, Divider, Rate, Button } from 'antd';
import axios from "axios";
import { useOrderContext } from '../../context/OrderContext';

// main
const Show = () => {
    const history = useHistory();
    const params = useParams();
    const [product, setProduct] = useState()
    const { addOrder } = useOrderContext()

    useEffect(() => {
        fetchProdcut()
        // eslint-disable-next-line
    }, [])

    const fetchProdcut = async () => {
        const { data } = await axios.get(`/api/products/${params.id}`)
        setProduct(data)
    }
    if (!product) return null
    return (
        <div className="product-show">
            <Row align='middle'  >
                <h1 onClick={() => history.goBack()} style={{ marginLeft: "1rem", marginTop: '0.5rem', cursor: "pointer" }}>GO BACK</h1>
            </Row>
            <Row gutter={[32, 32]} justify="center">
                <Col xs={10} >
                    <img src={product.image} alt="" style={{ width: "100%", objectFit: "contain" }} />
                </Col>
                <Col xs={8} >
                    <h1>{product.name}</h1>
                    <Divider />
                    <Rate allowHalf defaultValue={product.rating} /> <span>{product.numReviews} reviews</span>
                    <Divider />
                    <span>Price: ${product.price}</span>
                    <Divider />
                    <p>Description: {product.description}</p>
                </Col>
                <Col xs={6} >
                    <div style={{ border: "1px solid lightGrey" }}>
                        <Row justify="space-between" style={{ paddingLeft: '1rem', paddingRight: "1rem", paddingTop: "1rem" }} >
                            <span>Price:</span>
                            <span>${product.price}</span>
                        </Row>
                        <Divider />
                        <Row justify="space-between" style={{ paddingLeft: '1rem', paddingRight: "1rem" }}>
                            <span>Stock:</span>
                            <span>{product.countInStock}</span>
                        </Row>
                        <Divider />
                        <Row style={{ paddingLeft: '1rem', paddingRight: "1rem", paddingBottom: "1rem" }}>
                            <Button disabled={product.countInStock < 1 ? true : false} block type='primary' onClick={() => addOrder(product)}>
                                ADD TO CART
                            </Button>
                        </Row >
                    </div>
                </Col>
            </Row>
        </div >
    )
}

export default Show
