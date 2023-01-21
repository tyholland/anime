import styled, { createGlobalStyle } from 'styled-components';

export const FONT_COLOR_ORANGE = 'rgb(249, 128, 17)';
export const FONT_COLOR_RED = '#cc0000';
export const FONT_COLOR_WHITE = '#ffffff';
export const FONT_COLOR_WHITE_TRANSPARENT = '#ffffff95';
export const FONT_COLOR_BLACK = '#000000';
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_NORMAL = '400';

export const MOBILE_VIEW = '@media only screen and (max-width: 960px)';

export const $GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    min-width: 960px;
    max-width: 1200px;
    font-family: Arial, sans-serif;
  }

  button {
    cursor: pointer;
    font-family: Arial, sans-serif;
  }
`;

export const $GlobalWrapper = styled.div`
  &.leagueDetail {
    position: relative;
    height: auto;

    &::before {
      content: " ";
      background-image: url(/assets/background/goku-kamehameha.jpeg);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
    }
  }
`;

export const $GlobalContainer = styled.div`
  padding: 2%;

  &.grid {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  &.home {
    position: relative;
    height: auto;

    &::before {
      content: " ";
      background-image: url(/assets/background/itachi.png);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
    }
  }

  &.notFound {
    position: relative;
    height: 100vh;

    &::before {
      content: " ";
      background-image: url(/assets/background/deku-allmight.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
    }
  }

  &.league {
    position: relative;
    height: 100vh;

    &::before {
      content: " ";
      background-image: url(/assets/background/naruto-rasengan.png);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(85%);
    }
  }

  &.resource {
    position: relative;
    height: auto;

    &::before {
      content: " ";
      background-image: url(/assets/background/kakashi-sharigan.png);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
    }
  }

  &.character {
    position: relative;
    height: auto;
    align-items: center;
    flex-direction: column;

    &::before {
      content: " ";
      background-image: url(/assets/background/young-goku.jpeg);
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      top: 15%;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
    }
  }

  &.leagueCharacter {
    position: relative;
    height: auto;
    flex-direction: column;
    align-items: center;

    &::before {
      content: " ";
      background-image: url(/assets/background/saitama.png);
      background-size: 250px;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 15%;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
  }

  &.join {
    background-image: url(/assets/background/vegito.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom right;
  }
`;

export const $GlobalTitle = styled.div`
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 5%;
  font-size: 30px;
  text-align: center;
  position: relative;

  &.home {
    background: ${FONT_COLOR_WHITE};
    width: 400px;
    margin: 0 auto;
    padding: 2%;
    border-radius: 15px;
  }
`;

export const $GlobalSubTitle = styled.div`
  margin-bottom: 2%;
  font-size: 20px;
  text-align: center;
`;

export const $GlobalCircle = styled.div`
  border: 1px solid ${FONT_COLOR_BLACK};
  width: 14px;
  height: 14px;
  border-radius: 10px;

  &.fire {
    background-color: ${FONT_COLOR_RED};
  }

  &.arcane {
    background-color: #999;
  }

  &.darkness {
    background-color: ${FONT_COLOR_BLACK};
    border: 1px solid #ccc;
  }

  &.water {
    background-color: rgb(27, 5, 246);
  }

  &.ice {
    background-color: rgb(137, 196, 244);
  }

  &.electric {
    background-color: #ffd70080;
  }

  &.wind {
    background-color: #00000020;
  }

  &.earth {
    background-color: #964b0070;
  }

  &.celestrial {
    background-color: ${FONT_COLOR_WHITE};
  }

  &.noAffinity {
    background: #bf40bf60;
  }

  &.team {
    margin-right: 5px;
  }
`;
