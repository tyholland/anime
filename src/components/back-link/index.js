import Button from 'Components/button';
import React from 'react';
import { useRouter } from 'next/router';

const BackLink = () => {
  const router = useRouter();

  return (
    <Button
      btnText="&lt; Back"
      btnTextColor="orange"
      btnColor="black"
      customBtnClass="small"
      btnFunction={ () => router.back() }
    />
  );
};

export default BackLink;
