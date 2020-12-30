import React from 'react'
import { Layout, Row, Col, Button, Popover, Divider } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useThemColorContex } from '../context/ThemColorContex';
import { SettingOutlined, SolutionOutlined, LoginOutlined, LogoutOutlined, ShoppingOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom"
import { useCartContext } from '../context/CartContex';
import { useAuthContext } from '../context/AuthContext';
import _ from 'lodash'
import SignInButton from './components/SignInButton';
import SignUpButton from './components/SignUpButton';
import UserButton from './components/UserButton';
// main
const AppHeader = () => {
	const { primary } = useThemColorContex()
	const { cartItemTotal } = useCartContext()
	const history = useHistory()
	const { user, logout } = useAuthContext()



	const goTo = () => {
		if (cartItemTotal) return history.push('/cart')
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
									<span style={{ marginRight: "0.5rem", marginLeft: "0.5rem" }}>{cartItemTotal}</span>
									<span >CART</span>
								</Button>

								{(user && user.name)
									? <UserButton />
									: <div>
										<SignInButton />
										<SignUpButton />
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
