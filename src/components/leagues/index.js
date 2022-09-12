import React from 'react';
import Button from '../button';
import { $LeaguesTextContent, $Leagues } from './leagues.style';

const Leagues = ({ league, setPage, setHeader }) => {
  return (
    <$Leagues>
      <$LeaguesTextContent>{league}</$LeaguesTextContent>
      <$LeaguesTextContent>{league}</$LeaguesTextContent>
      <Button
        btnText="View Team"
        btnTextColor="black"
        btnColor="orange"
        customBtnClass="leagues"
        redirect="team"
        setHeader={setHeader}
        header={true}
      />
    </$Leagues>
  );
};

export default Leagues;
