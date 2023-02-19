import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import Metadata from 'Components/metadata';
import { $PolicySection } from './policy.style';

const Policy = () => {
  return (
    <>
      <Metadata
        title="Privacy Policy"
        description="Privacy policy for the ABZ Anime Fantasy League"
      />
      <$GlobalContainer>
        <$PolicySection>
          This privacy policy sets out how the Anime Fantasy League website and
          its owners uses and protects any information that you give the Anime
          Fantasy League website and its owners when you use this website. The
          Anime Fantasy League website's owners may change this policy from time
          to time without notice by updating this page. You should check this
          page from time to time to ensure that you are happy with any changes.
          This policy is effective from 02-18-2023.
        </$PolicySection>
        <$PolicySection>
          We may collect and store indefinitely any information you or your web
          browser sends to the site, including but not limited to the following:
          <ul>
            <li>IP Address Browser name, version, etc...</li>
            <li>
              Upon signing into the website, your google and facebook account
              information
            </li>
            <li>
              Any information you enter into the website, such as Anime Fantasy
              lineup picks.
            </li>
          </ul>
        </$PolicySection>
        <$PolicySection>
          We use traffic log cookies to identify which pages are being used.
          This helps us analyze data about webpage traffic and improve our
          website in order to tailor it to customer needs. We only use this
          information for statistical analysis purposes. Overall, cookies help
          us provide you with a better website by enabling us to monitor which
          pages you find useful and which you do not. A cookie in no way gives
          us access to your computer or any information about you, other than
          the data you choose to share with us.
        </$PolicySection>
        <$PolicySection>
          Our website may contain links to other websites of interest. However,
          once you have used these links to leave our site, you should note that
          we do not have any control over that other website. Therefore, we
          cannot be responsible for the protection and privacy of any
          information which you provide whilst visiting such sites and such
          sites are not governed by this privacy statement. You should exercise
          caution and look at the privacy statement applicable to the website in
          question.
        </$PolicySection>
      </$GlobalContainer>
    </>
  );
};

export default Policy;
