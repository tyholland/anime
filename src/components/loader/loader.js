import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import * as Styles from './loader.style';

const Loader = ({ isSmall = false }) => {
  if (isSmall) {
    return (
      <Styles.LoaderWrapper className="small">
        <PacmanLoader size={10} />
      </Styles.LoaderWrapper>
    );
  }

  return (
    <Styles.LoaderWrapper>
      <PacmanLoader />
    </Styles.LoaderWrapper>
  );
};

export default Loader;
