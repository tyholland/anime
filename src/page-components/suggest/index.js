import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import { $LoginWrapper } from 'PageComponents/login/login.style.js';
import Select from 'Components/select';
import { addEvent } from 'Utils/amplitude';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import SocialMedia from 'Components/social-media';
import Loader from 'Components/loader';
import ReadMore from 'Components/read-more';

const Suggest = () => {
  const [player, setPlayer] = useState('');
  const [series, setSeries] = useState('');
  const [rank, setRank] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const options = ['Captain', 'Brawler', 'Support', 'Villain', 'Battlefield'];
  let pathname = '';

  const handleSubmit = async () => {
    setIsLoading(true);

    addEvent('Suggest Character', {
      character: player,
      series,
      category: rank,
    });

    setIsSubmitted(true);
  };

  if (typeof window !== 'undefined') {
    pathname = window.location.href;
  }

  useEffect(() => {
    setIsDisabled(!player.length || !series.length || !rank.length);
  }, [player, series, rank]);

  return (
    <>
      <Metadata
        title="Suggest a Character"
        description="Suggest a character to be added to the Anime Fantasy League. Provide the characters name, anime series, and the character rank"
      />
      <BackLink />
      <$GlobalContainer>
        <$LoginWrapper>
          <$GlobalTitle>Suggest a Character</$GlobalTitle>
          {!isSubmitted && (
            <>
              <TextField placeholder="Character Name" onChange={setPlayer} />
              <TextField placeholder="Anime Series" onChange={setSeries} />
              <Select
                defaultVal="Character Rank"
                onChange={setRank}
                options={options}
              />
              <Button
                btnText={isLoading ? <Loader isSmall={true} /> : 'Submit'}
                btnColor="primary"
                customBtnClass="medium"
                btnFunction={handleSubmit}
                isDisabled={isDisabled}
              />
            </>
          )}
          {isSubmitted && <div>Thank you for your suggestion!</div>}
        </$LoginWrapper>
        <SocialMedia
          pageTitle="Tell Your Friends"
          title="Suggest a new character for the Anime Fantasy League"
          description="ABZ wants to know what character you want to have on your team."
          singleHashtag="#abzFantasyLeague"
          pluralHashtags={[
            'abz',
            'abzFantasyLeague',
            'animebrothaz',
            'abzSuggestCharacter',
            'animebrothazSuggestion',
          ]}
          url={pathname}
        />
        <ReadMore>
          Fire is a powerful elemental force that is harnessed by many heroes
          and villains in the game. Its weakness lies in water, making it
          vulnerable to attacks by water-based characters. Fire is a reliable
          and formidable element to wield in battles. The fire element is known
          to have access to devastating attacks and abilities that can turn the
          tide of any battle, and in this league, it is no different. As long as
          they are careful to avoid water-based opponents, flame users can
          surely lead a team to victory.
        </ReadMore>
      </$GlobalContainer>
    </>
  );
};

export default Suggest;
