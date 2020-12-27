import React, { useState, useEffect } from 'react'
import axios from "axios";
import authClient from '../../utils/authClient';

const List = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetchProdcuts()
    }, [])

    const fetchProdcuts = async () => {
        // const prodcuts = await authClient.client.get('/api/products')
        const { data } = await axios.get(`/api/products`)

        console.log(data)
        debugger
        setProducts(data)
    }
    return (
        <div className="product-list">
            List Prodcut
        </div>
    )
}

export default List
