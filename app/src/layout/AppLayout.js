import React from 'react'
import { Layout } from 'antd';
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContents from './AppContents';
import AppFooter from './AppFooter';

const { Header, Footer, Sider, Content } = Layout;
// main
const AppLayout = () => {
    return (
        <Layout>
            <AppSidebar />
            <Layout style={{ height: '100vh' }} >
                <AppHeader />
                <AppContents>
                    <span> hi </span>
                </AppContents>
                <AppFooter />
            </Layout>
        </Layout>
    )
}

export default AppLayout
