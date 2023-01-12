import React from 'react';
import FadeLoader from 'react-spinners/FadeLoader';
import { $LoaderWrapper } from './loader.style';

const Loader = () => {
  return (
    <$LoaderWrapper>
      <FadeLoader />
    </$LoaderWrapper>
  );
};

export default Loader;
