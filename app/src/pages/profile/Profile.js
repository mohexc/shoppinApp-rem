import React, { useEffect, useState } from 'react'
import { Row, Col, Form, Input, Typography, Button, message } from "antd"
import { useHistory } from "react-router-dom"
import { useAuthContext } from '../../context/AuthContext';

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

// main
const Profile = () => {
    const [submitBtn, setSubmitBtn] = useState(false)
    const history = useHistory()
    const { user, updateUserProfile } = useAuthContext()
    const [form] = Form.useForm();
    useEffect(() => {
        if (!user)
            return history.push('/signin')
    }, [history])
    const onFinish = async (values) => {
        setSubmitBtn(true)
        const result = await updateUserProfile(values)
        if (result.complete) {
            message.success(result.message)
            setSubmitBtn(false)
            form.setFieldsValue({
                password: '',
                confirmPassowrd: '',
            });
            return
        }
        message.error(result.message)
        setSubmitBtn(false)

    }
    const onFinishFailed = (values) => {
        message.error(values)
    }
    // if (!user) {
    //     history.push('/signin')
    //     return null
    // }
    return (
        <div className="product-list" style={{ height: "79vh", backgroundColor: "white", padding: "1rem" }}>
            <Row gutter={[24, 24]} >
                <Col xs={10} >
                    <Typography.Title level={3} >
                        <span style={{ marginRight: '1rem' }}>Update Profile</span>
                    </Typography.Title>
                    <Form
                        form={form}
                        colon={false}
                        labelAlign="left"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        {...layout}
                        name="signup"
                        initialValues={{
                            name: user ? user.name : '',
                            email: user ? user.email : ''
                        }}>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { type: 'email', message: 'The input is not valid E-mail!', },
                                { required: true, message: 'Please input your E-mail!', },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="name"
                            label="Username"
                            rules={[{ required: true, message: 'Please input your Username!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[{ required: true, message: 'Please input your Passowrd!', },]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassowrd"
                            label=" Confirm password"
                            rules={[
                                { required: true, message: 'Please input your Confirm password!', },
                                ({ getFieldValue }) => ({
                                    validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                    },
                                }),
                            ]}>
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button
                                loading={submitBtn}
                                disabled={submitBtn}
                                type="primary"
                                block
                                htmlType="submit" >
                                UPDATE
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col xs={14} >
                    <Typography.Title level={3} >
                        <span style={{ marginRight: '1rem' }}>MyOrder</span>
                    </Typography.Title>
                </Col>
            </Row >
        </div>
    )
}

export default Profile
