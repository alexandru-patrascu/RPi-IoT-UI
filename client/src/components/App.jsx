import { Layout } from 'antd';
import React, { useEffect, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';
import SideBar from './SideBar';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return <LoadingIndicator />;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout>
        <Header />
        <Content style={{ backgroundColor: 'white' }}>
          <div style={{ padding: 20 }}>Bill is a cat.</div>
        </Content>
        <Footer
          style={{ textAlign: 'center', padding: 0, backgroundColor: 'white' }}
        >
          <p>
            <b>Raspberry Pi CMS</b> ©2020
          </p>
          <p>Created by Alexandru Patrascu</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
