import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { photoCredits } from 'Utils/constants';
import * as Styles from './credits.style';

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
    const photos = photoCredits.sort((a, b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });
    const currentItems = photos.slice(itemOffset, endOffset);

    return (
      <Styles.CreditsWrapper>
        {currentItems.map((item) => (
          <Styles.CreditsItem key={item.name}>
            <Image src={item.image} width={200} height={200} alt={item.name} />
            <Styles.CreditsText>
              <span>Creator:</span> {item.creator}
            </Styles.CreditsText>
            <Styles.CreditsText>
              <span>Platform:</span> {item.platform}
            </Styles.CreditsText>
          </Styles.CreditsItem>
        ))}
      </Styles.CreditsWrapper>
    );
  };

  return (
    <>
      <Metadata
        title="Photo Credits"
        description="We give credit to all the photo creators that offer up their images to be used by others. For every image on our site, there is a reference to the person who created it."
      />
      <BackLink />
      <Styles.CreditsGlobalStyles />
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
