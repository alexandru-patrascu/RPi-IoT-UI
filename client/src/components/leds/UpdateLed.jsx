import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { useContext } from 'react';
// import { updateLed } from '../../handlers/ledHandlers';
import { LedsContext } from '../../helpers';

const UpdateLed = (props) => {
  const { _id, name } = props;
  const { leds, setLeds, setShowUpdateLedModal } = useContext(LedsContext);

  const handleClick = () => setShowUpdateLedModal(true);

  return (
    <Button size="small" type="link" onClick={handleClick}>
      <EditOutlined />
    </Button>
  );
};

export default UpdateLed;
