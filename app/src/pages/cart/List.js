import { Typography } from 'antd'
import React, { useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useCartContext } from '../../context/CartContex'
import CartItem from './components/CartItem'
import SummaryCart from './components/SummaryCart'
import Delete from './Delete'

const List = () => {
    const history = useHistory()
    const { cart, cartItemTotal } = useCartContext()
    const deletItemModalRef = useRef()

    useEffect(() => {
        if (!cartItemTotal) return history.push('/')
        // eslint-disable-next-line
    }, [cartItemTotal])

    const deleteCartItem = (product) => {
        deletItemModalRef.current.showModal(product)
    }

    return (
        <div className="order-list">
            <Typography.Title level={3}>Cart</Typography.Title>
            {cart.map((item) => <CartItem key={item.product._id} item={item} deleteCartItem={deleteCartItem} />)}
            {(cartItemTotal > 0) && <SummaryCart />}
            <Delete ref={deletItemModalRef} />
        </div>
    )
}

export default List
