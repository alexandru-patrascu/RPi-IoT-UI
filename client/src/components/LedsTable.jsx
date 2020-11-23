import { UserAddOutlined } from '@ant-design/icons';
import { Button, Card, Table, Tag } from 'antd';
import React from 'react';
import { columns } from '../config/table-config';

const CardTitle = ({ count }) => (
  <b>
    Leds <Tag color="blue">{count}</Tag>
  </b>
);

const CardExtra = () => (
  <Button type="primary" size="small" ghost>
    <UserAddOutlined />
    Add Led
  </Button>
);

const LedsTable = ({ leds }) => (
  <Card title={<CardTitle count={leds.length} />} extra={<CardExtra />}>
    <Table
      columns={columns}
      dataSource={leds}
      size="small"
      rowKey={(record) => record._id}
    />
  </Card>
);

export default LedsTable;
