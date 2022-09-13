import React from 'react';

const Loss = () => {
  return (
    <>
      <div>
        <div>Weekly Element Affinity</div>
        <div>Characters with the same weakness as the Weekly Element Affinity will recieve damage. The character will lose a percentage of the Weekly Element Affinity power boost. Characters that will receieve damage are Captains and Brawlers.</div>
      </div>
      <div>
        <div>Villains</div>
        <div>Characters with the same weakness as the Villain's Affinity will lose points. The character will lose a percentage of the Villain's damage. Characters that will receieve damage are Captains and Brawlers.</div>
      </div>
      <div>
        <div>Battlefield</div>
        <div>Characters with the same weakness as the Battlefield will recieve damage. A Battlefield can also damage allied characters without an Affinity. The character will lose a percentage of the Battlefield power boost. Characters that can be affected by this boost are Captains, Brawlers, Support, and Villains.</div>
      </div>
      <div>
        <div>User Voting</div>
        <div>Characters in a specific Head-to-Head Battle can recieve damage. The character will lose the full amount of the User Voting power loss. Characters that can be affected by this boost are Captains, Brawlers, Support, and Villains.</div>
      </div>
    </>
  );
};

export default Loss;
