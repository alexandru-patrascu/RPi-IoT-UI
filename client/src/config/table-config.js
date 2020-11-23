import { Tag } from 'antd';
import React from 'react';
import { DeleteLed, ToggleLed } from '../components/leds';

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
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
    title: 'Toggle',
    key: 'toggle',
    align: 'center',
    render: (props) => <ToggleLed {...props} />,
  },
  {
    title: 'Delete',
    key: 'delete',
    align: 'center',
    render: (props) => <DeleteLed {...props} />,
  },
];
