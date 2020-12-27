import React from 'react'
import { Layout, Row, Col } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../context/ThemColorContex';
// main
const AppHeader = () => {
    const { primary } = useThemColorContex()
    return (
        <Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white", padding: "0 1rem" }}>
            <Row justify="center">
                <Col xs={20}>
                    <Row>
                        <Col xs={12}>
                            <h1 style={{ color: primary }}>PROSHOP</h1>
                        </Col>
                        <Col xs={12}>
                            <Row justify="end">
                                <span style={{ marginRight: "1rem" }}>
                                    <ShoppingCartOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
                                    <span >CART</span>
                                </span>
                                <span>
                                    <UserOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
                                    <span >SIGN IN</span>
                                </span>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Layout.Header>
    )
}

export default AppHeader
