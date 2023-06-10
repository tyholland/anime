import React, { useEffect, useState } from 'react';
import Button from 'Components/button/button';
import TextField from 'Components/text-field/text-field';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from 'PageComponents/login/login.style';
import Select from 'Components/select/select';
import { addEvent } from 'Utils/amplitude';
import SocialMedia from 'Components/social-media/social-media';
import Loader from 'Components/loader/loader';
import { useUserContext } from 'Hooks/user';
import { responseError } from 'Utils/index';
import { addPlayerData } from 'Requests/player';

const SuggestCharacter = () => {
  const { currentUser } = useUserContext();
  const [player, setPlayer] = useState<string>('');
  const [series, setSeries] = useState<string>('');
  const [rank, setRank] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const options = ['Captain', 'Brawler', 'Support', 'Villain', 'Battlefield'];
  let pathname = '';

  const handleSubmit = async () => {
    setIsLoading(true);

    addEvent('Suggest Character', {
      character: player,
      series,
      category: rank,
      userId: currentUser?.user_id
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
      <Styles.LoginWrapper>
        <GlobalStyles.GlobalTitle>Suggest a Character</GlobalStyles.GlobalTitle>
        {!isSubmitted && (
          <>
            <GlobalStyles.GlobalSubTitle className="suggest">Noticed a missing hero from our roster? Use your summoning jutsu to recommend a new character for our vast Anime Universe!</GlobalStyles.GlobalSubTitle>
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
              disabledMsg="Please complete all the fields above in order to proceed"
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
      </Styles.LoginWrapper>
      {!isSubmitted && (
        <SocialMedia
          pageTitle="Spread the otaku love! Share with your nakama!"
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
