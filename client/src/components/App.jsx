import { Layout } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getLights } from '../handlers';
import { LightsContext } from '../helpers';
import LoadingIndicator from './LoadingIndicator';
import { Bedroom, BedroomLights, Dashboard, Home, NotFound } from './pages';
import SideBar from './SideBar';

const { Header, Content, Footer } = Layout;

const App = () => {
  const [lights, setLights] = useState([]);
  const [currentLight, setCurrentLight] = useState(null);
  const [showAddLightModal, setShowAddLightModal] = useState(false);
  const [showUpdateLightModal, setShowUpdateLightModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLights = useCallback(async () => {
    try {
      const response = await getLights;
      setLights(response);
    } catch (err) {
      console.error('An error occurred while fetching leds', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLights();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <LoadingIndicator />;

  return (
    <Layout className="layout-container">
      <SideBar />
      <Layout>
        <Header>Header Content</Header>

        <Content className="content">
          <LightsContext.Provider
            value={{
              lights,
              setLights,
              currentLight,
              setCurrentLight,
              showAddLightModal,
              setShowAddLightModal,
              showUpdateLightModal,
              setShowUpdateLightModal,
            }}
          >
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/bedroom" component={Bedroom} exact />
              <Route path="/bedroom/lights" component={BedroomLights} />
              <Route component={NotFound} />
            </Switch>
          </LightsContext.Provider>
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
