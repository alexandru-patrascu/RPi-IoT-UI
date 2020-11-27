import React from 'react';
import { AddLedModal, LedsTable, UpdateLedModal } from '../leds';

const BedroomLights = () => {
  return (
    <>
      <LedsTable />
      <AddLedModal />
      <UpdateLedModal />
    </>
  );
};

export default BedroomLights;
