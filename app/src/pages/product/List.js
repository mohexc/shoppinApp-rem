import React, { useState, useEffect } from 'react'
import axios from "axios";
import ProdcutCard from './components/ProductCard';
import { Row, Typography, Col } from 'antd'

const List = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProdcuts()
    }, [])

    const fetchProdcuts = async () => {
        const { data } = await axios.get(`/api/products`)
        setProducts(data)
    }
    return (
        <div className="product-list">
            <Typography.Title level={4}>List Prodcut</Typography.Title>
            <Row gutter={[16, 16]}>
                {products.map(product => (
                    <Col xs={4}>
                        <ProdcutCard product={product} />
                    </Col>))}
            </Row>
        </div>
    )
}

export default List
