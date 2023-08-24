import React from 'react';
import * as Styles from './footer.style';
import Link from 'next/link';

const Footer = () => {
  return (
    <Styles.FooterContainer>
      <Styles.FooterSection>
        <Styles.FooterLinks>
          <div className="title">Help</div>
          <div>
            <Link href="mailto:animebrothaz3@gmail.com">Contact Us</Link>
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
        </Styles.FooterLinks>
      </Styles.FooterSection>
    </Styles.FooterContainer>
  );
};

export default Footer;
