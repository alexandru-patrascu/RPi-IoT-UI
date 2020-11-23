import { Form, Input, InputNumber, Modal } from 'antd';
import React, { useContext, useState } from 'react';
import { LedsContext } from '../../helpers';

const { Item } = Form;

const AddLedModal = () => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    gpioPin: 0,
  });
  const { showAddLedModal, setShowAddLedModal } = useContext(LedsContext);

  const handleOk = () => {};
  const handleCancel = () => setShowAddLedModal(false);
  const handleValuesChange = ({ name, gpioPin }) =>
    setInitialValues({ name, gpioPin });

  return (
    <Modal
      centered
      title="Add Led"
      visible={showAddLedModal}
      onOk={() => setShowAddLedModal(false)}
      onCancel={handleCancel}
    >
      <Form
        layout="vertical"
        initialValues={initialValues}
        onValuesChange={handleValuesChange}
      >
        <Item label="Name" name="name" required>
          <Input placeholder="Name" />
        </Item>
        <Item label="Gpio Pin Number" name="gpioPin" required>
          <InputNumber />
        </Item>
      </Form>
    </Modal>
  );
};

export default AddLedModal;
