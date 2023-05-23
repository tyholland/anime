import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { $PodcastService } from './podcast.style';
import ReadMore from 'Components/read-more';
import Script from 'next/script';
import Image from 'next/image';

const Podcast = () => {
  const goToSharePage = () => {
    window.open('https://www.buzzsprout.com/1260827/share');
  };

  return (
    <>
      <Metadata
        title="Podcast"
        description="The Brothaz (DiscipleDashni, QuietJams, and TySoFly) get together to discuss a wide variety of topics within the anime community. Topics can range from, but are not limited to latest episodes, manga chapters, favorite characters and so on."
      />
      <$GlobalContainer>
        <$GlobalTitle className="podcast">
          <Image
            src="/assets/logo/abz-logo.webp"
            width={70}
            height={70}
            alt="Anime Brothaz"
          />
          Podcast
        </$GlobalTitle>
        <$PodcastService>
          <div>
            If you prefer to use your own podcast service/application, feel free
            to click the link below. It will take you to a page where you can
            choose your favorite podcast application, and then you can listen to
            all the ABZ podcast episodes that are available. Be sure to listen
            to episode 1 if you are new to the ABZ podcast channel.
          </div>
          <Button
            btnText="All Podcast Apps"
            btnColor="primary"
            customBtnClass="small"
            btnFunction={goToSharePage}
          />
        </$PodcastService>
        <div id="buzzsprout-large-player"></div>
        <div>
          Introducing the ABZ Anime Podcast!
          <p>
            The ABZ Anime Podcast is hosted by the Brothaz (DiscipleDashni,
            QuietJams, and TySoFly), a group of passionate anime enthusiasts who
            gather together to delve into a wide variety of topics within the
            anime community. Join us as we explore the latest episodes, manga
            chapters, beloved characters, and so much more. Immerse yourself in
            the vibrant world of anime with the ABZ Anime Podcast!
          </p>
          <p>
            With a plethora of episodes to choose from, our podcast covers a
            range of durations, varying from 30 minutes to an hour. It's the
            perfect way to spend your time, whether you're looking for a quick
            discussion or a deep dive into a specific topic. Get ready to embark
            on an exciting journey through the world of anime!
          </p>
          <p>
            To tune in to our podcast, simply click the link below. It will
            redirect you to a page where you can select your preferred podcast
            application. From there, you'll have access to all the captivating
            episodes of the ABZ Anime Podcast. If you're new to our channel, we
            recommend starting with episode 1 for an unforgettable introduction
            to the world of ABZ.
          </p>
          Happy listening and enjoy the ABZ Anime Podcast!
        </div>
      </$GlobalContainer>
      <ReadMore />
      <Script src="https://www.buzzsprout.com/1260827.js?container_id=buzzsprout-large-player&player=large" />
    </>
  );
};

export default Podcast;
