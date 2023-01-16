import Metadata from 'Components/metadata';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { photoCredits } from 'Utils/index';
import {
  $CreditsWrapper,
  $CreditsItem,
  $CreditsText,
  $CreditsGlobalStyles,
} from './credits.style';

const Credits = () => {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const pageCount = Math.ceil(photoCredits.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % photoCredits.length;
    setItemOffset(newOffset);
  };

  const getContentItems = () => {
    const currentItems = photoCredits.slice(itemOffset, endOffset);

    return (
      <$CreditsWrapper>
        {currentItems.map((item) => (
          <$CreditsItem key={item.name}>
            <Image src={item.image} width={200} height={200} alt={item.name} />
            <$CreditsText>
              <span>Creator:</span> {item.creator}
            </$CreditsText>
            <$CreditsText>
              <span>Platform:</span> {item.platform}
            </$CreditsText>
          </$CreditsItem>
        ))}
      </$CreditsWrapper>
    );
  };

  return (
    <>
      <Metadata
        title="Photo Credits"
        description="We give credit to all the photo creators that offer up their images to be used by others. For every image on our site, there is a reference to the person who created it."
      />
      <$CreditsGlobalStyles />
      {getContentItems()}
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Credits;
