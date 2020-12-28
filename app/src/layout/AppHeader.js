import React from 'react'
import { Layout, Row, Col, Button, Popover, Divider } from 'antd';
import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../context/ThemColorContex';
import { SettingOutlined, SolutionOutlined, LoginOutlined, LogoutOutlined, HeartOutlined, ShoppingOutlined, InboxOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import { useCartContext } from '../context/CartContex';
// main
const AppHeader = () => {
	const { primary } = useThemColorContex()
	const { itemsTotal } = useCartContext()
	const history = useHistory()
	const popoverLogin = () => {

		return (
			<div style={{ width: "250px", borderRadius: "20px important!" }}>
				<Row align="middle" style={{ color: primary }}><LoginOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />SING IN</Row>
				<Divider />
				<Row align="middle" style={{ color: primary }}><LogoutOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />Logout</Row>
				<Divider />
				<Row align="middle" style={{ color: primary }}><SolutionOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />SING UP</Row>
				<Divider />
				<Row align="middle" style={{ color: primary }}><SettingOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />Account</Row>
			</div>
		)
	}

	const popoverChart = () => {

		return (
			<div style={{ width: "250px", borderRadius: "20px important!" }}>
				<Row align="middle" style={{ color: primary }}>
					<HeartOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />
					Favorites
				</Row>
				<Divider />
				<Row align="middle" style={{ color: primary }}>
					<ShoppingOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />
					Bag
				</Row>
				<Divider />
				<Row align="middle" style={{ color: primary, cursor: "pointer" }} onClick={() => history.push(`/cart`)}>
					<InboxOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />
					<span style={{ marginRight: "1rem", }} >{itemsTotal}</span >
					Order
				</Row>
			</div>
		)
	}
	return (
		<Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white", padding: "0 1rem" }}>
			<Row justify="center">
				<Col xs={20}>
					<Row>
						<Col xs={12}>
							<h1 style={{ color: primary, cursor: "pointer" }} onClick={() => history.push(`/`)}>PROSHOP</h1>
						</Col>
						<Col xs={12}>
							<Row justify="end" align="middle" style={{ paddingTop: "1.1rem" }}>
								<Popover content={popoverChart()} trigger="click" >
									<Button style={{ marginRight: "1rem" }}>
										<ShoppingCartOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
										<span style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>{itemsTotal}</span>
										<span >CART</span>
									</Button>
								</Popover>
								<Popover content={popoverLogin()} trigger="click" >
									<Button>
										<UserOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
										<span >SIGN IN</span>
									</Button>
								</Popover>
							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout.Header>
	)
}

export default AppHeader
