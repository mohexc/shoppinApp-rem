import React, { useState } from 'react'
import { Card, Typography, Form, Input, Button, message } from 'antd'
import { useCartContext } from '../../../context/CartContex';

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 6,
        span: 18,
    },
};

const DeliveryAddress = () => {
    const { saveShippingAddress, shippingAddress } = useCartContext()
    const onFinish = (values) => {
        saveShippingAddress(values)
        message.success('Edit Success')
    }
    const onFinishFailed = (values) => {
        message.error(values)
    }
    return (
        <Card style={{ boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", marginBottom: "0.5rem" }}>
            <Typography.Title level={4}>DELIVERY ADDRESS</Typography.Title>
            <Form
                labelAlign="left"
                colon={false}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
                name="shippingAddress"
                initialValues={shippingAddress}
            >
                <Form.Item
                    name="address"
                    label="Address"
                    rules={[{ required: true, message: 'Please input your Address!' }]} >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="city"
                    label="City"
                    rules={[{ required: true, message: 'Please input your City!', },]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="country"
                    label="Country"
                    rules={[{ required: true, message: 'Please input your Country!', },]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="postalCode"
                    label="Postal Code"
                    rules={[{ required: true, message: 'Please input your Postal Code!', },]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={[{ required: true, message: 'Please input your  Phone!', },]}>
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" block htmlType="submit" >EDIT</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default DeliveryAddress
