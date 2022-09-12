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
      <Link href="/team">
        <$NavBtn className={ teamView && 'selected' } >
          <$NavText className={ settingsView && 'selected' }>
            Team
          </$NavText>
        </$NavBtn>
      </Link>
      <Link href="/matchup">
        <$NavBtn className={ teamView && 'selected' }>
          <$NavText className={ settingsView && 'selected' }>
            Matchup
          </$NavText>
        </$NavBtn>
      </Link>
      <$NavBtn>
        <$NavText>Characters</$NavText>
      </$NavBtn>
      <Link href="/settings">
        <$NavBtn className={ teamView && styles.navSelected }>
          <$NavText className={ settingsView && 'selected' }>
            Settings
          </$NavText>
        </$NavBtn>
      </Link>
    </$NavContainer>
  );
};

export default Nav;
