import Button from 'Components/button';
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
import { $SocialMediaWrapper } from './socialMedial.style';

const SocialMedia = ({
  url,
  title,
  singleHashtag,
  pluralHashtags,
  pageTitle,
  description,
}) => {
  const isMobileShare = typeof navigator !== 'undefined' && navigator.share;

  const handleMobileShare = async () => {
    const shareData = {
      title,
      text: description,
      url,
    };

    try {
      await navigator.share(shareData);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to utilize mobile share'));
    }
  };

  return (
    <>
      <$SocialMediaWrapper>
        <div className="title">{pageTitle}</div>
        <div className="btns">
          <FacebookShareButton url={url} quote={title} hashtag={singleHashtag}>
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={url} title={title} hashtags={pluralHashtags}>
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
          <EmailShareButton url={url} subject={title} body={description}>
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
          <RedditShareButton url={url} title={title}>
            <RedditIcon size={50} round={true} />
          </RedditShareButton>
          {isMobileShare && (
            <Button btnColor="share" btnFunction={handleMobileShare}>
              <Image
                src="/assets/icons/share-icon.png"
                width={100}
                height={100}
                alt="Share Icon"
              />
            </Button>
          )}
        </div>
      </$SocialMediaWrapper>
    </>
  );
};

export default SocialMedia;
