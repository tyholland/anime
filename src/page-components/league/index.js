import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';

const League = () => {
  return (
    <>
      <Metadata
        title="League"
        description="Join, Create or View all Leagues that you participant in"
      />
      <$GlobalContainer className="grid league">
        <SelectionCard btnText="Join League" redirect="/league/join" />
        <SelectionCard btnText="Create League" redirect="/league/create" />
        <SelectionCard btnText="View Leagues" redirect="/league/view" />
      </$GlobalContainer>
    </>
  );
};

export default League;
