import React from 'react';
import { $GlobalTitle } from 'Styles/global.style';

const Affinities = () => {
  return (
    <>
      <div>
        <div>Week 1 - Fire</div>
        <div>Power Boost: 250</div>
      </div>
      <div>
        <div>Week 2 - Water</div>
        <div>Power Boost: 300</div>
      </div>
      <div>
        <div>Week 3 - Earth</div>
        <div>Power Boost: 300</div>
      </div>
      <div>
        <div>Week 4 - Wind</div>
        <div>Power Boost: 250</div>
      </div>
      <div>
        <div>Week 5 - Arcane</div>
        <div>Power Boost: 200</div>
      </div>
      <div>
        <div>Week 6 - Darkness</div>
        <div>Power Boost: 250</div>
      </div>
      <div>
        <div>Week 7 - Celestial</div>
        <div>Power Boost: 300</div>
      </div>
      <div>
        <div>Week 8 - Ice</div>
        <div>Power Boost: 300</div>
      </div>
      <div>
        <div>Week 9 - Electric</div>
        <div>Power Boost: 250</div>
      </div>
      <$GlobalTitle>PlayOffs</$GlobalTitle>
      <div>
        <div>Week 10 - Hurricane</div>
        <div>Wind Boost: 250</div>
        <div>Water Boost: 300</div>
      </div>
      <$GlobalTitle>Semi-Finals</$GlobalTitle>
      <div>
        <div>Week 11 - ShadowFrost</div>
        <div>Darkness Boost: 250</div>
        <div>Ice Boost: 300</div>
      </div>
      <$GlobalTitle>Finals</$GlobalTitle>
      <div>
        <div>Week 12 - Mana Blaze</div>
        <div>Arcane Boost: 200</div>
        <div>Fire Boost: 250</div>
      </div>
    </>
  );
};

export default Affinities;
