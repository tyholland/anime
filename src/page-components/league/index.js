import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';
import ReadMore from 'Components/read-more';

const League = () => {
  return (
    <>
      <Metadata
        title="League"
        description="Join, Create or View all Leagues that you participant in"
      />
      <$GlobalContainer className="bgImage league">
        <div className="buttonGrid">
          <SelectionCard btnText="Join League" redirect="/league/join" />
          <SelectionCard btnText="Create League" redirect="/league/create" />
          <SelectionCard btnText="View Leagues" redirect="/league/view" />
        </div>
        <ReadMore />
      </$GlobalContainer>
    </>
  );
};

export default League;
