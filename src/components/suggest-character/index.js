import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalTitle, $GlobalSubTitle } from 'Styles/global.style.js';
import { $LoginWrapper } from 'PageComponents/login/login.style.js';
import Select from 'Components/select';
import { addEvent } from 'Utils/amplitude';
import SocialMedia from 'Components/social-media';
import Loader from 'Components/loader';
import { useAppContext } from 'src/hooks/context';
import { responseError } from 'Utils/index';
import { addPlayerData } from 'src/requests/player';

const SuggestCharacter = () => {
  const { currentUser } = useAppContext();
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

    if (currentUser) {
      try {
        await addPlayerData({ player, series, rank }, currentUser.token);
      } catch (err) {
        addEvent('Error', responseError(err, 'Failed to add new character'));
      }
    }

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
      <$LoginWrapper>
        <$GlobalTitle>Suggest a Character</$GlobalTitle>
        {!isSubmitted && (
          <>
            <$GlobalSubTitle className="suggest">If you noticed that there's a character that you'd like to use in your League or to just have in your Bracket. Recommend a character below, to be added to our growing list of anime characters.</$GlobalSubTitle>
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
        {isSubmitted && (
          <>
            <div>Thank you for your suggestion!</div>
            <Button
              btnText={'Submit Another'}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={() => {
                setIsSubmitted(false);
                setIsLoading(false);
              }}
            />
          </>
        )}
      </$LoginWrapper>
      {!isSubmitted && (
        <SocialMedia
          pageTitle="Share with your friends"
          title="Suggest a new character for the Anime Fantasy League"
          description="AFL wants to know what character you want to have on your team."
          singleHashtag="#animeFantasyLeague"
          pluralHashtags={[
            'afl',
            'animeFantasyLeague',
            'animebrothaz',
            'aflSuggestCharacter',
            'animeSuggestion',
          ]}
          url={pathname}
        />
      )}
    </>
  );
};

export default SuggestCharacter;
