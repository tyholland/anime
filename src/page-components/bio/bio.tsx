import React, { useEffect, useState } from 'react';
import BackLink from 'Components/back-link/back-link';
import * as GlobalStyles from 'Styles/global.style';
import Metadata from 'Components/metadata/metadata';
import { useRouter } from 'next/router';
import ReadMore from 'Components/read-more/read-more';
import BioCard from 'Components/bio-card/bio-card';

const Bio = () => {
  const router = useRouter();
  const [player, setPlayer] = useState<string | null>(null);

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      const { query } = router;
      setPlayer(query.character as string);
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
      <GlobalStyles.GlobalContainer>
        <BioCard characterId={player} />
      </GlobalStyles.GlobalContainer>
      <ReadMore />
    </>
  );
};

export default Bio;
