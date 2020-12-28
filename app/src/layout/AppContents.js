import React from 'react'
import { Layout, Card } from 'antd';

// main
const AppContents = ({ children }) => {
    return (
        <Layout.Content style={{ padding: "1rem", marginTop: 64 }}>
            {children}
        </Layout.Content>
    )
}

export default AppContents
