import React from 'react'
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContents from './AppContents';
import AppFooter from './AppFooter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from '../pages/product/List'
import CartList from '../pages/cart/List'
import ProductShow from '../pages/product/Show'
import Checkout from '../pages/checkout/Checkout';
import SignUp from '../pages/auth/SignUp';
import SignIn from '../pages/auth/SignIn';
import ForgetPasswored from '../pages/auth/ForgetPasswored';
import Profile from '../pages/profile/Profile'
import AppSidebar from "../layout/AppSidebar"
import { useAuthContext } from '../context/AuthContext';
import _ from 'lodash'
// main
const AppLayout = () => {
    const { user } = useAuthContext()
    return (
        <Router>
            <Layout>
                {_.get(user, "isAdmin", false) && <AppSidebar />}
                <Layout style={{ minHeight: '100vh' }} >
                    <AppHeader />
                    <AppContents>
                        <Switch>
                            <Route exact path="/profile"><Profile /></Route>
                            <Route exact path="/forgetpassword"><ForgetPasswored /></Route>
                            <Route exact path="/signin"><SignIn /></Route>
                            <Route exact path="/signup"><SignUp /></Route>
                            <Route exact path="/checkout"><Checkout /></Route>
                            <Route exact path="/cart"><CartList /></Route>
                            <Route exact path="/product/:id"><ProductShow /></Route>
                            <Route exact path="/"><ProductList /></Route>
                        </Switch>
                    </AppContents>
                    <AppFooter />
                </Layout>
            </Layout>
        </Router>
    )
}

export default AppLayout
