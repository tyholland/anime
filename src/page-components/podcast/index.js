import React, { useEffect } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { $PodcastService } from './podcast.style';

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
          <Button
            btnText="ABZ podcast on your favorite applications"
            btnColor="primary"
            customBtnClass="small"
            btnFunction={goToSharePage}
          />
        </$PodcastService>
        <div id="buzzsprout-large-player"></div>
      </$GlobalContainer>
    </>
  );
};

export default Podcast;
