import Button from 'Components/button/button';
import React from 'react';
import { useRouter } from 'next/router';

const BackLink = () => {
  const router = useRouter();

  return (
    <Button
      btnText="&lt; Back"
      btnColor="secondary"
      customBtnClass="small"
      btnFunction={() => router.back()}
    />
  );
};

export default BackLink;
