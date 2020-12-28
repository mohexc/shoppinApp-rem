import React from 'react'
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContents from './AppContents';
import AppFooter from './AppFooter';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from '../pages/product/List'
import CartList from '../pages/cart/List'
import ProductShow from '../pages/product/Show'


// main
const AppLayout = () => {
    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }} >
                <AppHeader />
                <AppContents>
                    <Switch>
                        {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route> */}

                        <Route exact path="/cart"><CartList /></Route>
                        <Route exact path="/product/:id"><ProductShow /></Route>
                        <Route exact path="/"><ProductList /></Route>
                    </Switch>
                </AppContents>
                <AppFooter />
            </Layout>
        </Router>
    )
}

export default AppLayout
