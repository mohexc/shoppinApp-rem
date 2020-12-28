import React from 'react'
import { Row, Col, Form, Input, Typography, Button, Checkbox, Card } from "antd"
import { SolutionOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../../context/ThemColorContex';
import { useHistory } from "react-router-dom"
import image from "../../images/2018-dodge-challenger-srt-demon-4k.jpg"
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

const ForgetPasswored = () => {
    const { primary } = useThemColorContex()
    const history = useHistory()

    const onFinish = (values) => {

    }
    const onFinishFailed = (values) => {

    }
    return (
        <Row gutter={[16, 16]} style={{ height: "79vh", backgroundColor: "white" }}>
            <Col xs={12} style={{ height: "100%", padding: "2rem" }}>
                <Typography.Title level={3} style={{ textAlign: 'center' }}>
                    <span style={{ marginRight: '1rem' }}>FORGET PASSWORD</span>
                    <SolutionOutlined style={{ fontSize: "2rem", marginRight: "1rem", color: primary }} />
                </Typography.Title>
                <Form
                    colon={false}
                    labelAlign="left"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    {...layout}
                    name="FORGET PASSWORD"
                    initialValues={{ remember: true, }}
                >
                    <Form.Item name="email" label="Email" >
                        <Input />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" block htmlType="submit">SUBMIT</Button>
                    </Form.Item>
                </Form>
            </Col>
            <Col xs={12} style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat center'
            }}>
            </Col>
        </Row>
    )
}

export default ForgetPasswored
