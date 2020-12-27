import React from 'react'
import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContents from './AppContents';
import AppFooter from './AppFooter';

import ListProdcut from '../pages/product/List'

// main
const AppLayout = () => {
    return (
        <Layout style={{ height: '100vh' }} >
            <AppHeader />
            <AppContents>
                <ListProdcut />
            </AppContents>
            <AppFooter />
        </Layout>
    )
}

export default AppLayout
