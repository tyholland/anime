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
        <h3>March 21, 2023</h3>
        <ul>
          <li>Character update</li>
          <ul>
            <li>Twice (Villain)</li>
          </ul>
        </ul>
        <h3>March 20, 2023</h3>
        <ul>
          <li>
            Add Bye week
            <ul>
              <li>Anime series will now have a bye week</li>
              <li>
                A character's bye week will be associated to the anime series
              </li>
            </ul>
          </li>
          <li>
            Updated Standings page
            <ul>
              <li>Fixed how records for individual teams is calculated</li>
            </ul>
          </li>
          <li>
            Updated League Matchups page
            <ul>
              <li>Removed random 0 underneath team names</li>
            </ul>
          </li>
        </ul>
        <h3>March 18, 2023</h3>
        <ul>
          <li>
            Updated Bracket feature
            <ul>
              <li>Removed ability to vote on previous rounds</li>
            </ul>
          </li>
          <li>
            Gameplay Rules
            <ul>
              <li>Changed copy under the Bracket section</li>
            </ul>
          </li>
        </ul>
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
