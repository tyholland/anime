import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import { $LoginWrapper } from 'PageComponents/login/login.style.js';
import Select from 'Components/select';
import { addEvent } from 'Utils/amplitude';
import BackLink from 'Components/back-link';

const Suggest = () => {
  const [player, setPlayer] = useState('');
  const [series, setSeries] = useState('');
  const [rank, setRank] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const options = ['Captain', 'Brawler', 'Support', 'Villain', 'Battlefield'];

  const handleSubmit = async () => {
    addEvent('Suggest Character', {
      character: player,
      series,
      category: rank,
    });

    setIsSubmitted(true);
  };

  useEffect(() => {
    setIsDisabled(!player.length || !series.length || !rank.length);
  }, [player, series, rank]);

  return (
    <>
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
                btnText="Submit"
                btnTextColor="black"
                btnColor="orange"
                customBtnClass="medium"
                btnFunction={handleSubmit}
                isDisabled={isDisabled}
              />
            </>
          )}
          {isSubmitted && <div>Thank you for your suggestion!</div>}
        </$LoginWrapper>
      </$GlobalContainer>
    </>
  );
};

export default Suggest;
