import React from 'react';
import * as Styles from './footer.style';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const openInNewTab = (url: string) => {
    window.open(url);
  };

  return (
    <Styles.FooterContainer>
      <Styles.FooterSection>
        <Styles.FooterLinks>
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
        </Styles.FooterLinks>
        <Styles.FooterLinks>
          <div className="title">Info</div>
          <div>
            <Link href="/policy">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/changelog">Changelog</Link>
          </div>
          <div>
            <Link href="/gameplay">Gameplay</Link>
          </div>
        </Styles.FooterLinks>
        <Styles.FooterLinks>
          <div className="title">To Do</div>
          <div>
            <Link href="/characters">Character List</Link>
          </div>
          <div>
            <Link href="/credits">Photo Credit</Link>
          </div>
          <div>
            <Link href="/podcast">ABZ Podcast</Link>
          </div>
        </Styles.FooterLinks>
      </Styles.FooterSection>
      <Styles.FooterSection className="social">
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
      </Styles.FooterSection>
    </Styles.FooterContainer>
  );
};

export default Footer;
