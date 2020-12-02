import { Form, Input, InputNumber, message, Modal, Spin } from 'antd';
import React, { useContext, useEffect, useState } from 'react';
import { updateLed } from '../../handlers/ledHandlers';
import { LedsContext } from '../../helpers';

const { Item } = Form;

const UpdateLedModal = () => {
  const {
    leds,
    setLeds,
    currentLed,
    showUpdateLedModal,
    setShowUpdateLedModal,
  } = useContext(LedsContext);
  const [isLoading, setIsLoading] = useState(true);
  const [initialValues, setInitialValues] = useState(null);

  const init = () => {
    setInitialValues(null);
    setIsLoading(true);
  };

  useEffect(() => {
    if (currentLed) {
      setInitialValues(currentLed);
      setIsLoading(false);
    }
  }, [currentLed]);

  const handleOk = async () => {
    const response = await updateLed(initialValues);
    const { success } = response;

    if (success) {
      const { data } = response;
      const oldLeds = leds.filter((led) => led._id !== data._id);

      // Update UI
      setLeds([...oldLeds, data]);
      setShowUpdateLedModal(false);

      // Send notification
      message.success(`Successfully updated led ${data.name}`);
    } else {
      message.error(
        `An error occurred while updating led ${currentLed.name}. Please try again later.`
      );
    }

    init();
  };

  const handleCancel = () => {
    init();
    setShowUpdateLedModal(false);
  };

  const handleValuesChange = (changedValue, changedValues) =>
    setInitialValues({ ...currentLed, ...changedValues });

  return (
    <Modal
      centered
      title="Change led's settings"
      visible={showUpdateLedModal}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {isLoading ? (
        <Spin size="large" />
      ) : (
        <Form
          layout="vertical"
          initialValues={initialValues}
          onValuesChange={handleValuesChange}
        >
          <Item label="Id" name="_id">
            <Input disabled value="Id" />
          </Item>
          <Item label="Gpio Pin Number" name="gpioPin" required>
            <InputNumber />
          </Item>
          <Item label="Name" name="name" required>
            <Input placeholder="Name" />
          </Item>
        </Form>
      )}
    </Modal>
  );
};

export default UpdateLedModal;
