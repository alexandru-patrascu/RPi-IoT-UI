import { message, Switch } from 'antd';
import React, { useContext } from 'react';
import { toggleLed } from '../../handlers/light.handler';
import { LightContext } from '../../helpers';

const ToggleLight = (props) => {
  let { _id, name, status } = props;
  const { leds, setLeds } = useContext(LightContext);

  const handleSwitch = async (value) => {
    const toggleStatus = await toggleLed(_id);

    if (toggleStatus === 200) {
      // Update UI
      let currentLed = leds.find((led) => led._id === _id);
      currentLed.status = !status;
      setLeds([...leds]);

      // Send notification
      message.success(`Successfully turned ${value ? 'ON' : 'OFF'} ${name}`);
    } else message.error(`An error occurred. Please try again later.`);
  };

  return <Switch size="small" checked={status} onChange={handleSwitch} />;
};

export default ToggleLight;
