import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import React, { useContext } from 'react';
import { deleteLed } from '../../handlers/light.handler';
import { LightContext } from '../../helpers';

const DeleteLight = (props) => {
  const { _id, name } = props;
  const { leds, setLeds } = useContext(LightContext);

  const handleConfirm = async () => {
    const response = await deleteLed(_id);

    if (response === 200) {
      // Update UI
      const filteredLeds = leds.filter((led) => led._id !== _id);
      setLeds(filteredLeds);

      // Send Notification
      message.success(`Successfully deleted ${name}!`);
    } else
      message.error(
        `An error occurred while removing ${name} from DB. Please try again later!`
      );
  };

  return (
    <Popconfirm
      title={`Are you sure you want to delete ${name}?`}
      onConfirm={handleConfirm}
      okText="Yes"
    >
      <Button ghost size="small" type="link">
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  );
};

export default DeleteLight;
