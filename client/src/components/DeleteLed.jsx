import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import React from 'react';

// import { deleteLed } from "../requests"

const confirm = (_id, fullName) => {
  // deleteLed(_id)
  message.success(`Successfully deleted ${fullName}`);
};

const DeleteLed = (props) => {
  const { _id, name } = props;

  return (
    <Popconfirm
      title={`Are you sure you want to delete ${name}?`}
      onConfirm={() => confirm(_id, name)}
      okText="Yes"
    >
      <Button ghost size="small" type="primary" className="delete-button">
        <DeleteOutlined />
      </Button>
    </Popconfirm>
  );
};

export default DeleteLed;
