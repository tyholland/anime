import Metadata from 'Components/metadata/metadata';
import React from 'react';
import Collapsible from 'react-collapsible';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './faq.style';
import ReadMore from 'Components/read-more/read-more';

const Faq = () => {
  const createLeagueUp = (
    <div className="collapseContainer">
      <div>How do I create a league?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const createLeagueDown = (
    <div className="collapseContainer">
      <div>How do I create a league?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const joinLeagueUp = (
    <div className="collapseContainer">
      <div>How can I join a league?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const joinLeagueDown = (
    <div className="collapseContainer">
      <div>How can I join a league?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const bracketUp = (
    <div className="collapseContainer">
      <div>How to create a bracket?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const bracketDown = (
    <div className="collapseContainer">
      <div>How to create a bracket?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const dailyMatchupUp = (
    <div className="collapseContainer">
      <div>How to vote on daily matchups?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const dailyMatchupDown = (
    <div className="collapseContainer">
      <div>How to vote on daily matchups?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const playoffsUp = (
    <div className="collapseContainer">
      <div>How are the playoffs formatted?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const playoffsDown = (
    <div className="collapseContainer">
      <div>How are the playoffs formatted?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const characterUp = (
    <div className="collapseContainer">
      <div>Where to view all characters?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const characterDown = (
    <div className="collapseContainer">
      <div>Where to view all characters?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const leagueSettingsUp = (
    <div className="collapseContainer">
      <div>How to view all league settings?</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const leagueSettingsDown = (
    <div className="collapseContainer">
      <div>How to view all league settings?</div>
      <div className="down">&#10132;</div>
    </div>
  );

  return (
    <>
      <GlobalStyles.CollapsibleStyles />
      <Metadata
        title="FAQs"
        description="Answers to all your questions regarding Anime Fantasy League. Whether its how to create a league or bracket, to viewing a character's bio page. Everything you need is here"
      />
      <GlobalStyles.GlobalContainer>
        <GlobalStyles.GlobalTitle>FAQ</GlobalStyles.GlobalTitle>
        <Styles.FaqAccordian>
          <Collapsible
            trigger={createLeagueDown}
            triggerWhenOpen={createLeagueUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'createLeague',
              'aria-controls': 'createLeague',
            }}
            contentElementId="createLeague"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eSwbao5S0TE?si=iNuC7zCGPAOAfwxb"
                title="How do I create a league?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
          <Collapsible
            trigger={joinLeagueDown}
            triggerWhenOpen={joinLeagueUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'joinLeague',
              'aria-controls': 'joinLeague',
            }}
            contentElementId="joinLeague"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/zexhclyJ2B0?si=5FR-Rae_7wLKA3T8"
                title="How can I join a league?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
          <Collapsible
            trigger={bracketDown}
            triggerWhenOpen={bracketUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'bracket',
              'aria-controls': 'bracket',
            }}
            contentElementId="bracket"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/hDrv19i_9oU?si=ntQQMXcmSK8fJ1HA"
                title="How to create a bracket?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
          <Collapsible
            trigger={dailyMatchupDown}
            triggerWhenOpen={dailyMatchupUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'dailyMatchup',
              'aria-controls': 'dailyMatchup',
            }}
            contentElementId="dailyMatchup"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/NI9SzwvS7SQ?si=xbNVibeW71MOqKZM"
                title="How to vote on daily matchups?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
          <Collapsible
            trigger={playoffsDown}
            triggerWhenOpen={playoffsUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'playoffs',
              'aria-controls': 'playoffs',
            }}
            contentElementId="playoffs"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1fElBHwh8ZM?si=zz26QYbDNm048yHx"
                title="How are the playoffs formatted?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
          <Collapsible
            trigger={characterDown}
            triggerWhenOpen={characterUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'character',
              'aria-controls': 'character',
            }}
            contentElementId="character"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/lJmwgJ75wbU?si=oBwfqkeHCw-OdHsU"
                title="Where to view all characters?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
          <Collapsible
            trigger={leagueSettingsDown}
            triggerWhenOpen={leagueSettingsUp}
            triggerTagName="div"
            triggerElementProps={{
              id: 'leagueSettings',
              'aria-controls': 'leagueSettings',
            }}
            contentElementId="leagueSettings"
          >
            <Styles.FaqWrapper>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/BxM531VHNd4?si=FAE6Tw8Pc0pOqbYv"
                title="How to view all league settings?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Styles.FaqWrapper>
          </Collapsible>
        </Styles.FaqAccordian>
      </GlobalStyles.GlobalContainer>
      <ReadMore />
    </>
  );
};

export default Faq;
