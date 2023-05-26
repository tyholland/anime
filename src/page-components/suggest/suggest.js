import React from 'react';
import * as GlobalStyles from 'Styles/global.style.js';
import BackLink from 'Components/back-link/back-link';
import Metadata from 'Components/metadata/metadata';
import ReadMore from 'Components/read-more/read-more';
import SuggestCharacter from 'Components/suggest-character/suggest-character';

const Suggest = () => {
  return (
    <>
      <Metadata
        title="Suggest a Character"
        description="Suggest a character to be added to the Anime Fantasy League. Provide the characters name, anime series, and the character rank"
      />
      <BackLink />
      <GlobalStyles.GlobalContainer>
        <SuggestCharacter />
      </GlobalStyles.GlobalContainer>
      <ReadMore>
        Affinity Tip: Fire is a powerful elemental force that is harnessed by
        many heroes and villains in the game. Its weakness lies in water, making
        it vulnerable to attacks by water-based characters. Fire is a reliable
        and formidable element to wield in battles. The fire element is known to
        have access to devastating attacks and abilities that can turn the tide
        of any battle, and in this league, it is no different. As long as they
        are careful to avoid water-based opponents, flame users can surely lead
        a team to victory.
      </ReadMore>
    </>
  );
};

export default Suggest;
