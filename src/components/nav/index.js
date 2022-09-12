import React from 'react';
import { $NavContainer, $NavBtn, $NavText } from './nav.style.js';
import { useRouter } from 'next/router';
import Link from 'next/link.js';

const Nav = () => {
  const router = useRouter();
  const teamView = ['Team', 'Bio', 'TeamInfo'].includes(router.pathname);
  const settingsView = ['Settings', 'Resources', 'Suggestions', 'LeagueSettings'].includes(router.pathname);

  return (
    <$NavContainer>
      <Link href="/">
        <$NavBtn>
          <$NavText>Home</$NavText>
        </$NavBtn>
      </Link>
      <$NavBtn>
        <$NavText>League</$NavText>
      </$NavBtn>
        {/* <Link href="/team">
          <$NavBtn className={ teamView && 'selected' } >
            <$NavText className={ settingsView && 'selected' }>
              Team
            </$NavText>
          </$NavBtn>
        </Link> */}
        {/* <$NavBtn>
          <$NavText>Characters</$NavText>
        </$NavBtn> */}
      <Link href="/matchup">
        <$NavBtn className={ teamView && 'selected' }>
          <$NavText className={ settingsView && 'selected' }>
            Matchup
          </$NavText>
        </$NavBtn>
      </Link>
      <Link href="/rules">
        <$NavBtn className={ teamView && styles.navSelected }>
          <$NavText className={ settingsView && 'selected' }>
            Game Rules
          </$NavText>
        </$NavBtn>
      </Link>
      <$NavBtn>
        <$NavText>Resources</$NavText>
      </$NavBtn>
      <$NavBtn>
        <$NavText>Sign In / Account</$NavText>
      </$NavBtn>
    </$NavContainer>
  );
};

export default Nav;
