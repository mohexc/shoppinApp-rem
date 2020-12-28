import React, { useState } from 'react'
import { Row, Col, Form, Input, Typography, Button, Checkbox, Card, message } from "antd"
import { SolutionOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../../context/ThemColorContex';
import { useHistory } from "react-router-dom"
import image from "../../images/peter-winckler-ggi9Ou9U2qQ-unsplash.jpg"
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
const SignUp = () => {
    const [submitBtn, setSubmitBtn] = useState(false)
    const { primary } = useThemColorContex()
    const history = useHistory()
    const { register } = useAuthContext()


    const onFinish = async (values) => {
        setSubmitBtn(true)
        const result = await register(values)
        if (result.complete) {
            message.success(result.message)
            history.push('/')
            return
        }
        message.error(result.message)

    }
    const onFinishFailed = (values) => {

    }

    return (
        <Row gutter={[16, 16]} style={{ height: "79vh", backgroundColor: "white" }}>
            <Col xs={12} style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </Col>
            <Col xs={12} style={{ height: "100%", padding: "2rem" }}>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>
                    <span style={{ marginRight: '1rem' }}>SIGNUP</span>
                    <SolutionOutlined style={{ fontSize: "2rem", marginRight: "1rem", color: primary }} />
                </Typography.Title>
                <Form
                    colon={false}
                    labelAlign="left"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    {...layout}
                    name="signup"
                    initialValues={{ remember: true, }}
                >
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
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button loading={submitBtn} disabled={submitBtn} type="primary" block htmlType="submit" >SING UP</Button>
                    </Form.Item>
                </Form>
                <Row justify="end"><span onClick={() => history.push(`/signin`)} className="pointer">SIGNIN</span></Row>
            </Col>
        </Row >
    )
}

export default SignUp
