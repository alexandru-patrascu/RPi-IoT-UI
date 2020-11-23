import { Tag } from 'antd';
import React from 'react';
import DeleteLed from '../components/leds/DeleteLed';
import ToggleLed from '../components/leds/ToggleLed';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Id',
    dataIndex: '_id',
    key: '_id',
  },
  {
    title: 'Gpio',
    dataIndex: 'gpioPin',
    key: 'gpioPin',
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    render: (status) => {
      let color = 'red';
      let text = 'OFF';

      // Change text & color if status is true or false
      if (status) {
        color = 'green';
        text = 'ON';
      }

      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: 'Action',
    key: 'action',
    align: 'center',
    render: (props) => (
      <div key={props._id}>
        <ToggleLed {...props} />
        &nbsp;
        <DeleteLed {...props} />
      </div>
    ),
  },
];
