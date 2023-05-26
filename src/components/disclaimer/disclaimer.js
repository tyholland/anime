import React from 'react';
import * as Styles from './disclaimer.style';

const Disclaimer = ({msg}) => {
  return (
    <Styles.DisclaimerWrapper>
      {msg}
    </Styles.DisclaimerWrapper>
  );
};

export default Disclaimer;
