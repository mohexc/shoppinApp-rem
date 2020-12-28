import React from 'react'
import { Row, Col, Form, Input, Typography, Button, Checkbox, Card } from "antd"
import { LoginOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../../context/ThemColorContex';
import { useHistory } from "react-router-dom"
import image from "../../images/playstation.jpg"
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
    const onFinish = (values) => {

    }
    const onFinishFailed = (values) => {

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
                    colon={false}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    {...layout}
                    name="signin"
                    initialValues={{ remember: true, }}
                >
                    <Form.Item name="name" label="Username" >
                        <Input />
                    </Form.Item>
                    <Form.Item name="passowrd" label="Password" >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
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
