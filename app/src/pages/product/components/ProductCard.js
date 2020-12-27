import React from 'react'
import { Card, Rate } from 'antd'


const ProductCard = ({ product }) => {
    console.log(product)
    debugger
    return (
        <Card cover={<img alt="example" src={product.image} />} >
            <Card.Meta title={product.name} description={`${product.description.substring(0, 30)}...`} />
            <Rate allowHalf defaultValue={product.rating} />
            <p>{product.price}</p>
        </Card >
    )
}

export default ProductCard
