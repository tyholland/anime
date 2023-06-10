import React from 'react';
import * as Styles from './disclaimer.style';
import { DisclaimerProps } from 'Utils/types';

const Disclaimer = ({msg}: DisclaimerProps) => {
  return (
    <Styles.DisclaimerWrapper>
      {msg}
    </Styles.DisclaimerWrapper>
  );
};

export default Disclaimer;
