import { Typography } from 'antd'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useCartContext } from '../../context/CartContex'
import CartItem from './components/CartItem'
import SummaryCart from './components/SummaryCart'
import Delete from './Delete'

const List = () => {
    const history = useHistory()
    const { cart, itemsTotal } = useCartContext()
    const deletItemModalRef = useRef()

    useEffect(() => {
        if (!itemsTotal) return history.push('/')
        // eslint-disable-next-line
    }, [itemsTotal])

    const deleteItem = (product) => {
        deletItemModalRef.current.showModal(product)
    }

    return (
        <div className="order-list">
            <Typography.Title level={3}>Cart</Typography.Title>
            {cart.map((item) => <CartItem key={item.product._id} item={item} deleteItem={deleteItem} />)}
            {(itemsTotal > 0) && <SummaryCart />}
            <Delete ref={deletItemModalRef} />
        </div>
    )
}

export default List
