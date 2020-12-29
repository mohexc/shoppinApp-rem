import React, { useEffect } from 'react'
import { Row, Col, Form, Input, Typography, Button, Checkbox, message } from "antd"
import { LoginOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../../context/ThemColorContex';
import { useHistory } from "react-router-dom"
import image from "../../images/playstation.jpg"
import { useAuthContext } from '../../context/AuthContext';

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 4,
        span: 20,
    },
};

// main
const SignIn = () => {
    const { primary } = useThemColorContex()
    const history = useHistory()
    const { login, user } = useAuthContext()

    useEffect(() => {
        if (user) return history.push('/')
    }, [user, history])

    const onFinish = async (values) => {
        const result = await login(values)
        if (result.complete) {
            history.push('/')
            message.success(result.message)
            return
        }
        message.error(result.message)
    }
    const onFinishFailed = (values) => {
        message.error(values)
    }
    return (
        <Row style={{ height: "79vh", backgroundColor: "white" }}>
            <Col xs={12} style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            </Col>
            <Col xs={12} style={{ height: "100%", padding: "2rem" }}>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>
                    <span style={{ marginRight: '1rem' }}>SIGN IN</span>
                    <LoginOutlined style={{ fontSize: "2rem", marginRight: "1rem", color: primary }} />
                </Typography.Title>
                <Form
                    labelAlign="left"
                    colon={false}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    {...layout}
                    name="signin"
                    initialValues={{ remember: true, }}
                >
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { type: 'email', message: 'The input is not valid E-mail!' },
                            { required: true, message: 'Please input your username!' },
                        ]} >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please input your password!', },]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        {...tailLayout}
                        name="remember"
                        valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" block htmlType="submit">SINGIN</Button>
                    </Form.Item>
                </Form>
                <Row justify="center">
                    <span className="pointer" onClick={() => history.push(`/signup`)}>SIGNUP</span>
                    <span style={{ marginRight: "1rem", marginLeft: "1rem" }}>|</span>
                    <span className="pointer" onClick={() => history.push('/forgetpassword')}>FORGET PASSWORD</span>
                </Row>
                {/* </Card> */}
            </Col>
        </Row >
    )
}

export default SignIn
