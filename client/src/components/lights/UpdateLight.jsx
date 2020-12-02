import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useContext } from 'react';
import { LightContext } from '../../helpers';

const UpdateLight = (props) => {
  const { setCurrentLed, setShowUpdateLedModal } = useContext(LightContext);

  const handleClick = () => {
    setCurrentLed(props);
    setShowUpdateLedModal(true);
  };

  return (
    <Button size="small" type="link" onClick={handleClick}>
      <SettingOutlined />
    </Button>
  );
};

export default UpdateLight;
