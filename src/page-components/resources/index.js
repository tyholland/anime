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
          btnColor="orange"
          btnTextColor="black"
        />
        <SelectionCard
          redirect="https://youtube.com/channel/UC6ZyoS8aagLeSq2CldEGfXw?sub_confirmation=1"
          btnText="Youtube Videos"
          btnColor="orange"
          btnTextColor="black"
        />
        <SelectionCard
          redirect="https://www.instagram.com/animebrothaz/"
          btnText="Instagram"
          btnColor="orange"
          btnTextColor="black"
        />
        <SelectionCard
          redirect="https://m.facebook.com/animebrothaz"
          btnText="Facebook"
          btnColor="orange"
          btnTextColor="black"
        />
        <SelectionCard
          redirect="https://mobile.twitter.com/animebrothaz"
          btnText="Twitter"
          btnColor="orange"
          btnTextColor="black"
        />
        <SelectionCard
          redirect="https://www.tiktok.com/@animebrothaz"
          btnText="TikTok"
          btnColor="orange"
          btnTextColor="black"
        />
        <SelectionCard
          redirect="http://paypal.me/animebrothaz"
          btnText="Support ABZ"
          btnColor="orange"
          btnTextColor="black"
        />
      </$GlobalContainer>
    </>
  );
};

export default Resources;
