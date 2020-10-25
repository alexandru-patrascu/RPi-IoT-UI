import { Layout } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { getLeds } from '../handlers/ledHandlers';
import LoadingIndicator from './LoadingIndicator';
import SideBar from './SideBar';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [leds, setLeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeds = useCallback(async () => {
    try {
      const response = await getLeds;
      setLeds(response);
    } catch (err) {
      console.error('Error fetching leds', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeds();
  }, []);

  if (isLoading) return <LoadingIndicator />;
  console.log('leds', leds);
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
