import { Layout } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { getLeds } from '../handlers/ledHandlers';
import { LedsContext } from '../helpers';
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
      console.error('An error occurred while fetching leds', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLeds();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <LoadingIndicator />;

  return (
    <Layout className="layout-container">
      <SideBar />
      <Layout>
        <Header>Header Content</Header>

        <Content className="content">
          <LedsContext.Provider value={{ leds, setLeds }}>
            <LedsTable />
          </LedsContext.Provider>
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
