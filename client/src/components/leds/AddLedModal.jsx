import { Form, Input, InputNumber, message, Modal } from 'antd';
import React, { useContext, useState } from 'react';
import { createLed } from '../../handlers/ledHandlers';
import { LedsContext } from '../../helpers';

const { Item } = Form;

const AddLedModal = () => {
  const { leds, setLeds, showAddLedModal, setShowAddLedModal } = useContext(
    LedsContext
  );

  const [initialValues, setInitialValues] = useState({
    name: '',
    gpioPin: 0,
  });

  const handleOk = async () => {
    const response = await createLed(initialValues);
    const { success } = response;

    if (success) {
      // Update UI
      setLeds([...leds, response.data]);
      setShowAddLedModal(false);

      // Send notification
      message.success(`Successfully created led ${initialValues.name}`);
    }
  };
  const handleCancel = () => setShowAddLedModal(false);
  const handleValuesChange = (changedValue, changedValues) =>
    setInitialValues(changedValues);

  return (
    <Modal
      centered
      title="Add Led"
      visible={showAddLedModal}
      onOk={handleOk}
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
