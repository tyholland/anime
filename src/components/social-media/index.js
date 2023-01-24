import React from 'react';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';
import { EmailIcon, FacebookIcon, RedditIcon, TwitterIcon } from 'react-share';
import { $SocialMediaWrapper } from './socialMedial.style';

const SocialMedia = ({
  url,
  title,
  singleHashtag,
  pluralHashtags,
  pageTitle,
  description,
}) => {
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
        </div>
      </$SocialMediaWrapper>
    </>
  );
};

export default SocialMedia;
