import { Typography } from 'antd'
import React, { useRef } from 'react'
import { useCartContext } from '../../context/CartContex'
import ItemCard from './components/ItemCard'
import SummaryCart from './components/SummaryCart'
import Delete from './Delete'

const List = () => {

    const { cart, itemsTotal } = useCartContext()
    const deletItemModalRef = useRef()

    const deleteItem = (product) => {
        deletItemModalRef.current.showModal(product)
    }

    return (
        <div className="order-list">
            <Typography.Title level={3}>Cart</Typography.Title>
            {cart.map((item) => <ItemCard key={item.product._id} item={item} deleteItem={deleteItem} />)}
            {(itemsTotal > 0) && <SummaryCart />}
            <Delete ref={deletItemModalRef} />
        </div>
    )
}

export default List
