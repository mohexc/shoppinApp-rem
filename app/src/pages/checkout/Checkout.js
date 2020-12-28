
import React from 'react'
import DeliveryAddress from './components/DeliveryAddress'
import OrderList from './components/OrderList'
import PaymentMethod from './components/PaymentMethod'

const Checkout = () => {
    return (
        <div>
            <DeliveryAddress />
            <OrderList />
            <PaymentMethod />

        </div>
    )
}

export default Checkout
