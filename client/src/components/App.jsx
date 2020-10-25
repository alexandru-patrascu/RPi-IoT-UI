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
    <Layout className="layout-container">
      <SideBar />
      <Layout>
        <Header />
        <Content className="content">Bill is a cat.</Content>
        <Footer className="footer">
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
