import React, { useEffect } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { $PodcastService, $PodcastDescript } from './podcast.style';
import ReadMore from 'Components/read-more';

const Podcast = () => {
  const getPodcastScript = () => {
    if (typeof document === 'undefined') {
      return;
    }

    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://www.buzzsprout.com/1260827.js?container_id=buzzsprout-large-player&player=large'
    );
    script.setAttribute('charset', 'utf-8');
    script.setAttribute('type', 'text/javascript');
    document.head.appendChild(script);
  };

  const goToSharePage = () => {
    window.open('https://www.buzzsprout.com/1260827/share');
  };

  useEffect(() => {
    getPodcastScript();
  }, []);

  return (
    <>
      <Metadata
        title="Podcast"
        description="The Brothaz (DiscipleDashni, QuietJams, and TySoFly) get together to discuss a wide variety of topics within the anime community. Topics can range from, but are not limited to latest episodes, manga chapters, favorite characters and so on."
      />
      <$GlobalContainer>
        <$GlobalTitle>Podcast</$GlobalTitle>
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
        <$PodcastDescript>
          The ABZ podcast is recorded by the Brothaz (DiscipleDashni, QuietJams,
          and TySoFly), who get together to discuss a wide variety of topics
          within the anime community. Topics can range from, but are not limited
          to, the latest episodes, manga chapters, favorite characters, and so
          on. You can listen to all the ABZ podcast episodes here and now. We
          have an abundance of episodes to choose from, ranging from 30 minutes
          to an hour. Enjoy!
        </$PodcastDescript>
        <ReadMore />
      </$GlobalContainer>
    </>
  );
};

export default Podcast;
