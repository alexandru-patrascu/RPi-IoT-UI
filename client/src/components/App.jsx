import React, { useEffect, useState } from 'react';
import LoadingIndicator from './LoadingIndicator';

const App = () => {
  const [leds, setLeds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // await Get Leds from DB
  }, []);

  if (isLoading) return <LoadingIndicator />;

  return <div className="App">App Test</div>;
};

export default App;
