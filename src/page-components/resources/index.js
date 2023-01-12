import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card';
import Metadata from 'Components/metadata';

const Resources = () => {
  return (
    <>
      <Metadata
        title="Resources"
        description="Learn about everything Anime Brothaz. Look at our social media pages on instagram, facebook, tiktok, and twitter. Watch and listen to our podcast and youtube videos."
      />
      <$GlobalContainer className="grid resource">
        <SelectionCard
          redirect="https://www.buzzsprout.com/1260827"
          btnText="Podcast"
        />
        <SelectionCard
          redirect="https://youtube.com/channel/UC6ZyoS8aagLeSq2CldEGfXw?sub_confirmation=1"
          btnText="Youtube Videos"
        />
        <SelectionCard
          redirect="https://www.instagram.com/animebrothaz/"
          btnText="Instagram"
        />
        <SelectionCard
          redirect="https://m.facebook.com/animebrothaz"
          btnText="Facebook"
        />
        <SelectionCard
          redirect="https://mobile.twitter.com/animebrothaz"
          btnText="Twitter"
        />
        <SelectionCard
          redirect="https://www.tiktok.com/@animebrothaz"
          btnText="TikTok"
        />
        <SelectionCard
          redirect="http://paypal.me/animebrothaz"
          btnText="Support ABZ"
        />
      </$GlobalContainer>
    </>
  );
};

export default Resources;
