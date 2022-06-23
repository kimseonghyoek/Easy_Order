import React from 'react';

import Modal from '../frontend/src/container/Modal';

export default {
  title: 'Container/Modal',
  component: Modal,
};

const Template = (args) => <Modal {...args} />

export const NoEmail = Template.bind({});
NoEmail.args = {
  modalTitle: 'Email...'
};