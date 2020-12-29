
import { Row, Col } from 'antd'
import React, { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import DeliveryAddress from './components/DeliveryAddress'
import OrderList from './components/OrderList'
import PaymentMethod from './components/PaymentMethod'
import SummaryOrder from './components/SummaryOrder'
import { useHistory } from 'react-router-dom'

const Checkout = () => {
    const { user } = useAuthContext()
    const history = useHistory()

    useEffect(() => {
        if (!user) {
            return history.push('/signin')
        }
    }, [user, history])
    return (
        <div>
            <Row gutter={[18, 18]}>
                <Col xs={10}>
                    <DeliveryAddress />
                    <PaymentMethod />
                    <OrderList />
                </Col>
                <Col xs={14}>
                    <SummaryOrder />
                </Col>
            </Row>
        </div>
    )
}

export default Checkout
