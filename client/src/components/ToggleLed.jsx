import { message, Switch } from 'antd';
import React from 'react';
import { toggleLed } from '../handlers/ledHandlers';

const ToggleLed = (props) => {
  let { _id, name, status } = props;

  const handleSwitch = async (value) => {
    const toggleStatus = await toggleLed(_id);

    if (toggleStatus === 200)
      message.success(`Successfully turned ${value ? 'ON' : 'OFF'} ${name}`);
    else message.error(`An error occurred. Please try again later.`);
  };

  return (
    <Switch size="small" status={status.toString()} onChange={handleSwitch} />
  );
};

export default ToggleLed;
