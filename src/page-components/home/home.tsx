import React from 'react';
import * as GlobalStyles from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/selection-card';
import Metadata from 'Components/metadata/metadata';
import SuggestCharacter from 'Components/suggest-character/suggest-character';
import { allSeries } from 'Utils/constants';
import Link from 'next/link';
import * as Styles from './home.style';

const Home = () => {
  return (
    <>
      <Metadata title="Home" description="Anime Fantasy League" />
      <GlobalStyles.GlobalContainer className="bgImage home">
        <GlobalStyles.GlobalTitle className="home">Anime Fantasy League</GlobalStyles.GlobalTitle>
        <GlobalStyles.GlobalContainer className="home">
          <div className="buttonGrid">
            <SelectionCard btnText="Create League" redirect="/league/create" />
            <SelectionCard
              btnText="Create Bracket"
              redirect="/bracket/create"
            />
            <SelectionCard btnText="Matchup Voting" redirect="/matchup/all" />
            <SelectionCard btnText="View Characters" redirect="/characters" />
            <SelectionCard btnText="Suggest Character" redirect="/#suggest" />
            <SelectionCard btnText="Gameplay" redirect="/gameplay" />
          </div>
        </GlobalStyles.GlobalContainer>
      </GlobalStyles.GlobalContainer>
      <GlobalStyles.GlobalContainer className="homeSection homeEven">
        <GlobalStyles.GlobalTitle>The Ultimate Otaku Battle Guide</GlobalStyles.GlobalTitle>
        <strong>Preamble</strong>
        <Styles.HomeIntro>
          Welcome, Otaku warriors, to the Anime Fantasy League, your
          battleground for proving your anime wisdom! Here, you'll assemble a
          team of legendary manga and anime heroes, then pit them against your
          friends' teams in epic weekly battles.
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          <strong>1. The Formation of Your Guild</strong>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          At the dawn of your journey, each player is granted a power pool of
          9000 points. Use this wisely to recruit your team of characters and
          secure your battlefields. Once all guilds are assembled, the league's
          master will initiate the draft. After this event, the grand contest
          commences on the next Monday.
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          <strong>2. The Cycle of the Anime Seasons</strong>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          Your quest unfolds over 12 weeks, each with a new elemental affinity
          gracing the battlefield. The calendar of events is as follows:
          <ul>
            <li>Mondays: A new week dawns, you can adjust your roster.</li>
            <li>
              Thursdays: Roster modifications are sealed, individual duels
              voting commences.
            </li>
            <li>
              Fridays: The damage caused by Villains and Battlefields is
              revealed.
            </li>
            <li>
              Sundays: Voting for duels ends, the last weekly affinity
              graces the battlefield.
            </li>
          </ul>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          <strong>3. Power Fluxes: Power-ups and Jutsus</strong>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          Characters gain or lose power through elemental affinities, support
          characters, battlefield conditions, and the will of the voting
          populace. Boosts are like power-ups, supercharging your characters,
          while losses are like debilitating jutsus that reduce their prowess.
          Mastering these fluctuations is key to your triumph in the Anime
          Fantasy League.
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          <strong>4. The Power of the Fans: User Voting</strong>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          Fan favor can turn the tide of a battle! To initiate voting for a
          duel, navigate to your matchup and tap on a character's points.
          Winning the fan's favor earns your character points and reduces the
          opponent's. In the event of a tie, the clash remains evenly balanced,
          and no points are exchanged.
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          <strong>5. The Grand Tournament: Bracket Play</strong>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          The Grand Tournament is an exhilarating feature of the Anime Fantasy
          League. As a participant, you can prophesize the outcome of character
          clashes. The tournament master controls the start of each round.
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          <strong>6. The Summoning Scroll: Suggesting a Character</strong>
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          Is your favorite character absent from our roster? Fear not! You can
          use the Summoning Scroll to suggest a character for inclusion in our
          ever-expanding universe of anime warriors.
        </Styles.HomeIntro>
        <Styles.HomeIntro>
          Remember, the Anime Fantasy League is a test of strategy and anime
          knowledge. Choose your heroes wisely, and may the spirit of anime
          guide you to victory!
        </Styles.HomeIntro>
      </GlobalStyles.GlobalContainer>
      <GlobalStyles.GlobalContainer className="homeSection" id="suggest">
        <SuggestCharacter />
      </GlobalStyles.GlobalContainer>
      <GlobalStyles.GlobalContainer className="homeSection homeEven">
        <GlobalStyles.GlobalTitle>Anime Series</GlobalStyles.GlobalTitle>
        <div className="seriesTitle">
          A Blossoming Bouquet of Anime: A list of all the anime series from
          which the characters in this game originate.
        </div>
        <div className="series">
          {allSeries.sort().map((item: Record<string, any>) => {
            return (
              <Link key={item.name} href={item.url}>
                <button>{item.name}</button>
              </Link>
            );
          })}
        </div>
      </GlobalStyles.GlobalContainer>
    </>
  );
};

export default Home;
