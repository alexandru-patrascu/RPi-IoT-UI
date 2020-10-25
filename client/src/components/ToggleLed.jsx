import { Switch } from 'antd';
import React, { useEffect, useState } from 'react';
import { toggleLed } from '../handlers/ledHandlers';

const ToggleLed = (props) => {
  const [checked, setChecked] = useState(false);
  let { _id, name, status } = props;

  useEffect(() => {
    setChecked(status);
    // props.status = !status
  }, [status, setChecked]);

  const handleSwitch = async (value) => {
    const toggleStatus = await toggleLed(_id);
    if (toggleStatus === 200) {
      setChecked(value);
      message.success(`Successfully turned ${value ? 'ON' : 'OFF'} ${name}`);
    } else message.error(`An error occured. Please try again later.`);
  };

  return <Switch size="small" checked={checked} onChange={handleSwitch} />;
};

export default ToggleLed;
