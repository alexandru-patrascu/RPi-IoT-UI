import { Spin } from 'antd';
import React from 'react';

const LoadingIndicator = () => (
  <div className="loading-indicator">
    <Spin size="large" />
  </div>
);

export default LoadingIndicator;
