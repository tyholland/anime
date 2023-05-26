import Button from 'Components/button/button';
import Image from 'next/image';
import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';
import { EmailIcon, FacebookIcon, RedditIcon, TwitterIcon } from 'react-share';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import * as Styles from './socialMedial.style';
import { useAppContext } from 'src/hooks/context';

const SocialMedia = ({
  url,
  title,
  singleHashtag,
  pluralHashtags,
  pageTitle,
  description,
}) => {
  const { currentUser } = useAppContext();
  
  const handleMobileShare = async () => {
    const shareData = {
      title: description,
      text: title,
      url,
    };

    try {
      await navigator.share(shareData);

      addEvent('Social Share', {
        platform: 'mobile device',
        title,
        userId: currentUser?.user_id
      });
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to utilize mobile share'));
    }
  };

  const handleTracking = (platform) => {
    addEvent('Social Share', {
      platform,
      title,
      userId: currentUser?.user_id
    });
  };

  return (
    <>
      <Styles.SocialMediaWrapper>
        <div className="title">{pageTitle}</div>
        <div className="btns">
          <FacebookShareButton
            url={url}
            quote={title}
            hashtag={singleHashtag}
            onShareWindowClose={() => handleTracking('facebook')}
          >
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={url}
            title={title}
            hashtags={pluralHashtags}
            onShareWindowClose={() => handleTracking('twitter')}
          >
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
          <EmailShareButton
            url={url}
            subject={title}
            body={description}
            onShareWindowClose={() => handleTracking('email')}
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
          <RedditShareButton
            url={url}
            title={title}
            onShareWindowClose={() => handleTracking('reddit')}
          >
            <RedditIcon size={50} round={true} />
          </RedditShareButton>
          <Styles.SocialMediaMobileDevice>
            <Button btnColor="share" btnFunction={handleMobileShare}>
              <Image
                src="/assets/icons/share-icon.webp"
                width={100}
                height={100}
                alt="Share Icon"
              />
            </Button>
          </Styles.SocialMediaMobileDevice>
        </div>
      </Styles.SocialMediaWrapper>
    </>
  );
};

export default SocialMedia;
