import React from 'react';
import { $ResourceContentLinks } from './resources.style';
import { $GlobalContainer } from 'Styles/global.style';
import BackLink from 'Components/back-link';
import Button from 'Components/button';
import ResourcesMetadata from './resourcesMetadata';

const Resources = () => {
  return (
    <>
      <ResourcesMetadata />
      <$GlobalContainer>
        <BackLink redirect="/" />
        <$ResourceContentLinks>
          <Button
            redirect="https://www.buzzsprout.com/1260827"
            btnText="ABZ Podcast Episodes"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
          <Button
            redirect="https://youtube.com/channel/UC6ZyoS8aagLeSq2CldEGfXw?sub_confirmation=1"
            btnText="ABZ Youtube Videos"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
          <Button
            redirect="https://www.instagram.com/animebrothaz/"
            btnText="ABZ Instagram"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
          <Button
            redirect="https://m.facebook.com/animebrothaz"
            btnText="ABZ Facebook"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
          <Button
            redirect="https://mobile.twitter.com/animebrothaz"
            btnText="ABZ Twitter"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
          <Button
            redirect="https://www.tiktok.com/@animebrothaz"
            btnText="ABZ TikTok"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
          <Button
            redirect="http://paypal.me/animebrothaz"
            btnText="Support ABZ"
            btnColor="red"
            btnTextColor="white"
            customBtnClass="medium space"
          />
        </$ResourceContentLinks>
      </$GlobalContainer>
    </>
  );
};

export default Resources;
