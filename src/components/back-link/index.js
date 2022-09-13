import Button from 'Components/button';
import React from 'react';

const BackLink = ({ redirect }) => {
  return (
    <Button
      btnText="&lt; Back"
      btnTextColor="orange"
      btnColor="black"
      customBtnClass="small"
      redirect={redirect}
      header={true}
    />
  );
};

export default BackLink;
