import { SettingOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useContext } from 'react';
import { LedsContext } from '../../helpers';

const UpdateLed = (props) => {
  const { setCurrentLed, setShowUpdateLedModal } = useContext(LedsContext);

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

export default UpdateLed;
