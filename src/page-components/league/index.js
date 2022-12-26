import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import HomeMetadata from './leagueMetadata';
import SelectionCard from 'Components/selection-card';

const League = () => {
  return (
    <>
      <HomeMetadata />
      <$GlobalContainer className="grid league">
        <SelectionCard
          btnText="Join League"
          btnTextColor="black"
          btnColor="orange"
          redirect="/league/join"
        />
        <SelectionCard
          btnText="Create League"
          btnTextColor="black"
          btnColor="orange"
          redirect="/league/create"
        />
        <SelectionCard
          btnText="View Leagues"
          btnTextColor="black"
          btnColor="orange"
          redirect="/league/view"
        />
      </$GlobalContainer>
    </>
  );
};

export default League;
