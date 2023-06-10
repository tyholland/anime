import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import * as Styles from './loader.style';
import { LoaderProps } from 'Utils/types';

const Loader = ({ isSmall = false }: LoaderProps) => {
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
