import React from 'react';

const Voting = () => {
  return (
    <>
      <div>
        <div>Initiate User Voting</div>
        <div>Team A can initiate User Voting by going to their Matchup. Then clicking on a character's points, that'll open up that characters point break down. Then they can click the button to get votes. After User Voting has been initiated, then team B can not initiate their own User Voting for the same Head-to-Head Battle.</div>
      </div>
      <div>
        <div>Can the other team get User Voting?</div>
        <div>Team B can use that same User Voting initiated by team A to get their character to win the Head-to-Head Battle. If team B gets more votes, that will result in team A losing points and team B gaining points.</div>
      </div>
      <div>
        <div>What about a Tie in Voting</div>
        <div>In the event of a tie in User Voting. Neither team gains or loses and points.</div>
      </div>
    </>
  );
};

export default Voting;
