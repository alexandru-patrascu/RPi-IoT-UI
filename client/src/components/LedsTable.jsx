import { UserAddOutlined } from '@ant-design/icons';
import { Button, Card, Table, Tag } from 'antd';
import React, { useContext } from 'react';
import { columns } from '../config/table-config';
import { LedsContext } from '../helpers';

const CardTitle = ({ count }) => (
  <b>
    Leds <Tag color="blue">{count}</Tag>
  </b>
);

const CardExtra = ({ handleClick }) => (
  <Button type="primary" size="small" ghost onClick={handleClick}>
    <UserAddOutlined />
    Add Led
  </Button>
);

const LedsTable = () => {
  const { leds } = useContext(LedsContext);
  const title = <CardTitle count={leds.length} />;

  const handleAddLed = () => console.log('handle add led');

  return (
    <Card title={title} extra={<CardExtra handleClick={handleAddLed} />}>
      <Table
        columns={columns}
        dataSource={leds}
        size="small"
        rowKey={(record) => record._id}
      />
    </Card>
  );
};

export default LedsTable;
