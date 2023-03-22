import React from 'react';
import {
  $FooterContainer,
  $FooterSection,
  $FooterLinks,
} from './footer.style.js';
import Image from 'next/image.js';
import Link from 'next/link.js';

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url);
  };

  return (
    <$FooterContainer>
      <$FooterSection>
        <$FooterLinks>
          <div className="title">Help</div>
          <div>
            <Link href="mailto:animebrothaz3@gmail.com">Contact Us</Link>
          </div>
          <div>
            <Link href="http://paypal.me/animebrothaz">
              <a target="_blank" rel="noreferrer">
                Support ABZ
              </a>
            </Link>
          </div>
          <div>
            <Link href="/suggest">Suggest Character</Link>
          </div>
        </$FooterLinks>
        <$FooterLinks>
          <div className="title">More Info</div>
          <div>
            <Link href="/policy">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/changelog">Changelog</Link>
          </div>
          <div>
            <Link href="/gameplay">Gameplay</Link>
          </div>
          <div>
            <Link href="/credits">Photo Credit</Link>
          </div>
        </$FooterLinks>
      </$FooterSection>
      <$FooterSection className="social">
        <Image
          src="/assets/icons/facebook-icon.webp"
          width={40}
          height={40}
          alt="ABZ Facebook"
          onClick={() => openInNewTab('https://m.facebook.com/animebrothaz')}
        />
        <Image
          src="/assets/icons/twitter-icon.webp"
          width={40}
          height={40}
          alt="ABZ Twitter"
          onClick={() =>
            openInNewTab('https://mobile.twitter.com/animebrothaz')
          }
        />
        <Image
          src="/assets/icons/instagram-icon.webp"
          width={40}
          height={40}
          alt="ABZ Instagram"
          onClick={() =>
            openInNewTab('https://www.instagram.com/animebrothaz/')
          }
        />
        <Image
          src="/assets/icons/youtube-icon.webp"
          width={40}
          height={40}
          alt="ABZ Youtube"
          onClick={() =>
            openInNewTab(
              'https://youtube.com/channel/UC6ZyoS8aagLeSq2CldEGfXw?sub_confirmation=1'
            )
          }
        />
        <Image
          src="/assets/icons/tiktok-icon.webp"
          width={40}
          height={40}
          alt="ABZ Tiktok"
          onClick={() => openInNewTab('https://www.tiktok.com/@animebrothaz')}
        />
      </$FooterSection>
    </$FooterContainer>
  );
};

export default Footer;
