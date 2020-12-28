import React from 'react'
import { Card, Rate } from 'antd'
import { useHistory } from "react-router-dom";

const ProductCard = ({ product }) => {
    const history = useHistory();
    return (
        <Card onClick={() => history.push(`/product/${product._id}`)} cover={<img alt="example" src={product.image} />} >
            <Card.Meta title={product.name} description={`${product.description.substring(0, 30)}...`} />
            <Rate allowHalf defaultValue={product.rating} />
            <p>{product.price}</p>
        </Card >
    )
}

export default ProductCard
