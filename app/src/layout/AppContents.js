import React from 'react'
import { Layout, Card } from 'antd';

// main
const AppContents = ({ children }) => {
    return (
        <Layout.Content style={{ padding: "1rem", marginTop: 64 }}>
            <Card style={{ height: '100%' }}>
                {children}
            </Card>
        </Layout.Content>
    )
}

export default AppContents
