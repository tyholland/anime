import React from 'react';
import { $ErrorMsgWrapper } from './errorMsg.style';

const ErrorMsg = ({ msg }) => {
  return <$ErrorMsgWrapper>{msg}</$ErrorMsgWrapper>;
};

export default ErrorMsg;
