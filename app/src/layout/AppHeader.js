import React from 'react'
import { Layout, Row, Col, Button, Popover, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../context/ThemColorContex';
import { SettingOutlined, SolutionOutlined, LoginOutlined, LogoutOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import { useCartContext } from '../context/CartContex';
import { useAuthContext } from '../context/AuthContext';
import _ from 'lodash'
// main
const AppHeader = () => {
	const { primary } = useThemColorContex()
	const { itemsTotal } = useCartContext()
	const history = useHistory()
	const { user, logout } = useAuthContext()

	const popoverAccount = () => {
		return (
			<div style={{ width: "250px" }}>
				<Row align="middle" style={{ color: primary }} onClick={() => history.push(`/profile`)}>
					<SettingOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />
					Account
				</Row>
				<Divider />

				<Row align="middle" style={{ color: primary, cursor: "pointer" }} onClick={() => history.push(`/checkout`)}>
					<ShoppingOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />
					My Order
				</Row>
				<Divider />
				<Row align="middle" style={{ color: primary }} onClick={logout}>
					<LogoutOutlined style={{ fontSize: "1.2rem", marginRight: "1rem", }} />
					Logout
				</Row>
			</div>
		)
	}

	const goTo = () => {
		if (itemsTotal) return history.push('/cart')
		return history.push('/')
	}

	// main
	return (
		<Layout.Header style={{ position: 'fixed', zIndex: 1, width: '100%', backgroundColor: "white", padding: "0 1rem" }}>
			<Row>
				<Col xs={22}>
					<Row>
						<Col xs={12}>
							<h1 style={{ color: primary, cursor: "pointer", fontWeight: "bolder", fontSize: "1.5rem" }} onClick={() => history.push(`/`)}>X SHOP</h1>
						</Col>
						<Col xs={12}>
							<Row justify={_.get(user, 'isAdmin', false) ? 'center' : 'end'} align="middle" style={{ width: '100%' }}>
								<Button onClick={() => goTo()} style={{ marginRight: "1rem" }}>
									<ShoppingCartOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
									<span style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>{itemsTotal}</span>
									<span >CART</span>
								</Button>

								{(user && user.name)
									? <div>
										<Popover placement="bottom" content={popoverAccount()} trigger="click" >
											<Button>Account: {user.name}</Button>
										</Popover>
									</div>
									: <div>
										<Button onClick={() => history.push('/signin')} style={{ marginRight: "1rem" }}>
											<LoginOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
											<span >SIGN IN</span>
										</Button>
										<Button onClick={() => history.push('/signup')} style={{ marginRight: "1rem" }}>
											<SolutionOutlined style={{ fontSize: '1.2rem', color: primary, marginRight: "0.5rem" }} />
											<span >SIGN UP</span>
										</Button>
									</div>
								}

							</Row>
						</Col>
					</Row>
				</Col>
			</Row>
		</Layout.Header>
	)
}

export default AppHeader
