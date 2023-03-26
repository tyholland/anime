import React, { useEffect, useState } from 'react';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';
import Metadata from 'Components/metadata';
import { useRouter } from 'next/router';
import ReadMore from 'Components/read-more';
import BioCard from 'Components/bio-card';

const Bio = () => {
  const router = useRouter();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { query } = router;
      setPlayer(query.character);
    }
  }, [router.query]);

  return (
    <>
      <Metadata
        title="Character Bio"
        description={
          'Profile for each individual character. Lists all their affinities, weaknesses, and series.'
        }
      />
      <BackLink />
      <$GlobalContainer>
        <BioCard characterId={player} />
      </$GlobalContainer>
      <ReadMore />
    </>
  );
};

export default Bio;
