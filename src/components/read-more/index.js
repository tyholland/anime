import Button from 'Components/button';
import React, { useState } from 'react';
import { $ReadMoreWrapper, $ReadMoreContent } from './readMore.style';

const ReadMore = ({ children }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <$ReadMoreWrapper>
      <Button
        btnText={`Read ${showMore ? 'Less' : 'More'}`}
        btnFunction={() => setShowMore(!showMore)}
        btnColor="readMore"
        customBtnClass="small"
      />
      <$ReadMoreContent className={showMore && 'show'}>
        {children}
      </$ReadMoreContent>
    </$ReadMoreWrapper>
  );
};

export default ReadMore;
