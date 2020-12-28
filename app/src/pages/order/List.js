import { Card } from 'antd'
import React from 'react'
import { useOrderContext } from '../../context/OrderContext'
import OrderCard from './components/OrderCard'

const List = () => {

    const { orders } = useOrderContext()

    return (
        <div className="order-list">
            <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "1rem" }}>
                Status
            </Card>
            {orders.map((order) => <OrderCard order={order} />)}

        </div>
    )
}

export default List
