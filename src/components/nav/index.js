import React from 'react';
import { $NavContainer, $NavBtn, $NavText } from './nav.style.js';
import Link from 'next/link.js';

const Nav = () => {
  return (
    <$NavContainer>
      <Link href="/">
        <$NavBtn>
          <$NavText>Home</$NavText>
        </$NavBtn>
      </Link>
      <Link href="/league">
        <$NavBtn>
          <$NavText>League</$NavText>
        </$NavBtn>
      </Link>
      <Link href="/gameplay">
        <$NavBtn>
          <$NavText>
            Gameplay
          </$NavText>
        </$NavBtn>
      </Link>
      <Link href="/resources">
        <$NavBtn>
          <$NavText>Resources</$NavText>
        </$NavBtn>
      </Link>
      <Link href="/account">
        <$NavBtn>
          <$NavText>Account</$NavText>
        </$NavBtn>
      </Link>
    </$NavContainer>
  );
};

export default Nav;
