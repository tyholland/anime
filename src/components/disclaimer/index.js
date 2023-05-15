import React from 'react';
import { $DisclaimerWrapper } from './disclaimer.style';

const Disclaimer = ({msg}) => {
  return (
    <$DisclaimerWrapper>
      {msg}
    </$DisclaimerWrapper>
  );
};

export default Disclaimer;
