import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { $LoaderWrapper } from './loader.style';

const Loader = ({ isSmall = false }) => {
  if (isSmall) {
    return (
      <$LoaderWrapper className="small">
        <PacmanLoader size={10} />
      </$LoaderWrapper>
    );
  }

  return (
    <$LoaderWrapper>
      <PacmanLoader />
    </$LoaderWrapper>
  );
};

export default Loader;
