import Button from 'Components/button';
import React from 'react';

const BackLink = ({ redirect }) => {
  return (
    <Button
      btnText="&lt; Back"
      btnTextColor="black"
      btnColor="orange"
      customBtnClass="small"
      redirect={redirect}
      header={true}
    />
  );
};

export default BackLink;
