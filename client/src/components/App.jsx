import { Layout } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getLeds } from '../handlers/ledHandlers';
import { LedsContext } from '../helpers';
import { AddLedModal, LedsTable, UpdateLedModal } from './leds';
import LoadingIndicator from './LoadingIndicator';
import SideBar from './SideBar';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [leds, setLeds] = useState([]);
  const [currentLed, setCurrentLed] = useState(null);
  const [showAddLedModal, setShowAddLedModal] = useState(false);
  const [showUpdateLedModal, setShowUpdateLedModal] = useState(false);
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
          <LedsContext.Provider
            value={{
              leds,
              setLeds,
              currentLed,
              setCurrentLed,
              showAddLedModal,
              setShowAddLedModal,
              showUpdateLedModal,
              setShowUpdateLedModal,
            }}
          >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/bedroom" component={Bedroom} exact />
              <Route path="/bedroom/lights" component={BedroomLights} />
              <Route component={NotFound} />
            </Switch>
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

const Home = () => {
  return <h2>Home</h2>;
};

const Dashboard = () => {
  return <h2>Dashboard</h2>;
};

const Bedroom = () => {
  return <h2>BedroomOverview</h2>;
};

const BedroomLights = () => {
  return (
    <>
      <LedsTable />
      <AddLedModal />
      <UpdateLedModal />
    </>
  );
};

const NotFound = () => {
  return <h2>NotFound</h2>;
};
export default App;
