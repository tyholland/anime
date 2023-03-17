import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Metadata from 'Components/metadata';

const Changelog = () => {
  return (
    <>
      <Metadata
        title="Changelog"
        description="Displays all the changes that happen on the site. Keeping you informed and up to date"
      />
      <$GlobalContainer>
        <$GlobalTitle>Changelog</$GlobalTitle>
        <h3>March 16, 2023</h3>
        <ul>
          <li>New character added</li>
          <ul>
            <li>Mo Fan (Captain)</li>
            <li>Zhuo Yifan (Captain)</li>
            <li>Ye Ming (Captain)</li>
            <li>John (Support)</li>
            <li>Seraphina (Support)</li>
            <li>Joker (Villain)</li>
          </ul>
          <li>
            Updated Bracket feature
            <ul>
              <li>Changed from 24 players to 16 players</li>
              <li>Allow users to vote without creating an account</li>
              <li>
                Give bracket creator the ability to activate each round within
                the bracket
              </li>
            </ul>
          </li>
        </ul>
      </$GlobalContainer>
    </>
  );
};

export default Changelog;
