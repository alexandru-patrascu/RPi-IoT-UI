import { Layout } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { getLeds } from '../handlers/ledHandlers';
import LedsTable from './LedsTable';
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
        <Content className="content">
          <LedsTable leds={leds} />
        </Content>
        <Footer className="footer">
          <b>Raspberry Pi CMS © 2020 </b> <br />
          Created by Alexandru Patrascu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
