import Link from 'next/link';
import React from 'react';
import { $BackLinkText } from './back-link.style';

const BackLink = ({ redirect }) => {
  return (
    <Link href={`/${redirect}`}>
      <button>
        <$BackLinkText>&lt; Back</$BackLinkText>
      </button>
    </Link>
  );
};

export default BackLink;
