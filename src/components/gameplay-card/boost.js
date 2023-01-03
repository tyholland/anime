import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection, $GameplayCardTitle } from './gameplayCard.style';

const Boost = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        <$GameplayCardTitle>Weekly Element Affinity</$GameplayCardTitle>
        <div>
          Characters with the same Affinity as the Weekly Element Affinity will
          recieve a boost. The character will recieve a percentage of the Weekly
          Element Affinity power boost.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Support Character</$GameplayCardTitle>
        <div>
          Support characters can boost allied characters. An allied character
          will recieve a percentage of the Support character's power boost.
          Characters will also have the chance to recieve a double boost if the
          Support character has two Affinities and the character has both of the
          same Affinities. Characters that are affected by this boost are
          Captains and Brawlers. However, Brawlers that are in the 2v2 Battle,
          are not affected by a normal Support Character. This doesn't apply to
          a Battlefield either.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Support Character in 2v2 Battle</$GameplayCardTitle>
        <div>
          Support characters in a 2v2 Battle can only boost the Brawler they are
          teamed up with. The Brawler will recieve a percentage of that Support
          character's power boost. The Brawler will also have the chance to
          recieve a double boost if the Support character has two Affinities and
          the Brawler has both of the same Affinities. Characters not in the 2v2
          Battle, will not be affected by the Support character in a 2v2 Battle.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Battlefield</$GameplayCardTitle>
        <div>
          Characters with the same Affinity as the Battlefield will recieve a
          boost. A Battlefield can also boost an allied character without an
          Affinity. The character will recieve a percentage of the Battlefield
          power boost. Characters will also have the chance to recieve a double
          boost if the Battlefield has two Affinities and the character has both
          of the same Affinities.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>User Voting</$GameplayCardTitle>
        <div>
          Characters in a specific Head-to-Head Battle can recieve a boost. The
          character will recieve the full amount of the User Voting power boost.
          This doesn't apply to a Battlefield.
        </div>
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default Boost;
