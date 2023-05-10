import Affinities from 'Components/gameplay-card/affinities';
import Boost from 'Components/gameplay-card/boost';
import Loss from 'Components/gameplay-card/loss';
import Voting from 'Components/gameplay-card/voting';
import React from 'react';
import { $GlobalTitle, $CollapsibleStyles } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import MakeTeam from 'Components/gameplay-card/make-team';
import Schedule from 'Components/gameplay-card/schedule';
import BracketCard from 'Components/gameplay-card/bracket-card';
import { $GameplayCardAccordian } from './gameplayCard.style';

const GameplayCard = () => {
  const teamUp = (
    <div className="collapseContainer">
      <div>Making Your Team</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const teamDown = (
    <div className="collapseContainer">
      <div>Making Your Team</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const scheduleUp = (
    <div className="collapseContainer">
      <div>League Schedule</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const scheduleDown = (
    <div className="collapseContainer">
      <div>League Schedule</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const affinityUp = (
    <div className="collapseContainer">
      <div>Weekly Element Affinities</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const affinityDown = (
    <div className="collapseContainer">
      <div>Weekly Element Affinities</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const boostUp = (
    <div className="collapseContainer">
      <div>Power Boosts</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const boostDown = (
    <div className="collapseContainer">
      <div>Power Boosts</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const lossUp = (
    <div className="collapseContainer">
      <div>Power Loss</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const lossDown = (
    <div className="collapseContainer">
      <div>Power Loss</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const voteUp = (
    <div className="collapseContainer">
      <div>Voting Rules</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const voteDown = (
    <div className="collapseContainer">
      <div>Voting Rules</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const bracketUp = (
    <div className="collapseContainer">
      <div>Bracket</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const bracketDown = (
    <div className="collapseContainer">
      <div>Bracket</div>
      <div className="down">&#10132;</div>
    </div>
  );

  return (
    <$GameplayCardAccordian>
      <$CollapsibleStyles />
      <$GlobalTitle>Gameplay</$GlobalTitle>
      <Collapsible
        trigger={teamDown}
        triggerWhenOpen={teamUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'team', 'aria-controls': 'team' }}
        contentElementId="team"
      >
        <MakeTeam />
      </Collapsible>
      <Collapsible
        trigger={scheduleDown}
        triggerWhenOpen={scheduleUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'schedule', 'aria-controls': 'schedule' }}
        contentElementId="schedule"
      >
        <Schedule />
      </Collapsible>
      <Collapsible
        trigger={affinityDown}
        triggerWhenOpen={affinityUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'affinity', 'aria-controls': 'affinity' }}
        contentElementId="affinity"
      >
        <Affinities />
      </Collapsible>
      <Collapsible
        trigger={boostDown}
        triggerWhenOpen={boostUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'boost', 'aria-controls': 'boost' }}
        contentElementId="boost"
      >
        <Boost />
      </Collapsible>
      <Collapsible
        trigger={lossDown}
        triggerWhenOpen={lossUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'loss', 'aria-controls': 'loss' }}
        contentElementId="loss"
      >
        <Loss />
      </Collapsible>
      <Collapsible
        trigger={voteDown}
        triggerWhenOpen={voteUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'vote', 'aria-controls': 'vote' }}
        contentElementId="vote"
      >
        <Voting />
      </Collapsible>
      <Collapsible
        trigger={bracketDown}
        triggerWhenOpen={bracketUp}
        triggerTagName="div"
        triggerElementProps={{ id: 'bracket', 'aria-controls': 'bracket' }}
        contentElementId="bracket"
      >
        <BracketCard />
      </Collapsible>
    </$GameplayCardAccordian>
  );
};

export default GameplayCard;
