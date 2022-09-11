import React from 'react';
import Button from '../button';
import { $LeaguesTextContent, $Leagues, $LeaguesViewBtnText, $LeaguesViewBtn } from './leagues.style';

const Leagues = ({ league, setPage, setHeader }) => {
  return (
    <$Leagues>
      <$LeaguesTextContent>{league}</$LeaguesTextContent>
      <$LeaguesTextContent>{league}</$LeaguesTextContent>
      <Button
        btnText="View Team"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor={$LeaguesViewBtn}
        customBtnTextColor={$LeaguesViewBtnText}
        redirect={() => setPage('Team')}
        setHeader={setHeader}
        header={true}
      />
    </$Leagues>
  );
};

export default Leagues;
