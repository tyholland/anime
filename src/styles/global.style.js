import styled, { createGlobalStyle } from 'styled-components';

export const COLOR_ORANGE = 'rgb(249, 128, 17)';
export const COLOR_ORANGE_DISABLED = 'rgba(249, 128, 17, 0.8)';
export const COLOR_ORANGE_LIGHT = 'rgba(249, 128, 17, 0.3)';
export const COLOR_RED = '#cc0000';
export const COLOR_SUCCESS = '#4BB543';
export const COLOR_ERROR = '#cc000080';
export const COLOR_WHITE = '#ffffff';
export const COLOR_WHITE_TRANSPARENT = '#ffffff95';
export const COLOR_BLACK = '#000000';
export const COLOR_BLACK_DISABLED = '#00000010';
export const COLOR_BLUE = 'rgb(27, 5, 246)';
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_NORMAL = '400';

export const RESPONSIVE_VIEW = '@media only screen and (max-width: 960px)';
export const MOBILE_VIEW = '@media only screen and (max-width: 600px)';

export const $GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    min-width: 960px;
    max-width: 1200px;
    font-family: Arial, sans-serif;

    ${RESPONSIVE_VIEW} {
      min-width: auto;
      width: 100%;
    }
  }

  button {
    cursor: pointer;
    font-family: Arial, sans-serif;
  }
`;

export const $GlobalContainer = styled.div`
  padding: 2%;

  ${RESPONSIVE_VIEW} {
    padding: 5% 3%;
    min-height: 70vh;
  }

  &.grid {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  .buttonGrid {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  &.schedule {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &.invalid {
    flex-direction: column;
    padding: 2%;

    button {
      margin-left: 0;
    }
  }

  &.bgImage {
    position: relative;
    height: auto;

    &::before {
      content: " ";
      background-image: url(/assets/background/itachi.jpg);
      background-size: cover;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
      min-height: 100vh;

      ${RESPONSIVE_VIEW} {
        min-height: 0;
        background-size: 100% 100%;
      }
    }
  }

  &.leagueDetail {
    > button {
      margin: 0;
    }

    &::before {
      background-image: url(/assets/background/goku-kamehameha.jpeg);\
    }
  }

  &.home {
    &::before {
      background-image: url(/assets/background/itachi.jpg);
    }
  }

  &.notFound {
    height: 100vh;

    ${MOBILE_VIEW} {
      height: 0;
    }

    &::before {
      background-image: url(/assets/background/deku-allmight.jpg);
    }
  }

  &.league {
    &::before {
      background-image: url(/assets/background/naruto-rasengan.jpg);
      filter: grayscale(85%);
    }
  }

  &.resource {
    &::before {
      background-image: url(/assets/background/kakashi-sharigan.jpg);
    }
  }

  &.character {
    align-items: center;
    flex-direction: column;

    &::before {
      background-image: url(/assets/background/young-goku.jpeg);
      background-size: contain;
      top: 22%;
      min-height: auto;
    }
  }

  &.leagueCharacter {
    position: relative;
    height: auto;
    flex-direction: column;
    align-items: center;

    &::before {
      content: " ";
      background-image: url(/assets/background/saitama.jpg);
      background-size: 250px;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 15%;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    ${RESPONSIVE_VIEW} {
      padding: 0;
    }
  }
`;

export const $GlobalTitle = styled.div`
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 5%;
  font-size: 30px;
  text-align: center;
  position: relative;

  &.home {
    background: ${COLOR_WHITE};
    width: 400px;
    margin: 0 auto;
    padding: 2%;
    border-radius: 15px;

    ${RESPONSIVE_VIEW} {
      width: 75%;
    }
  }

  ${RESPONSIVE_VIEW} {
    font-size: calc(100% + 8px);
  }
`;

export const $GlobalSubTitle = styled.div`
  margin-bottom: 2%;
  font-size: 20px;
  text-align: center;
`;

export const $GlobalCircle = styled.div`
  border: 1px solid ${COLOR_BLACK};
  width: 14px;
  height: 14px;
  border-radius: 10px;

  &.fire {
    background-color: ${COLOR_RED};
  }

  &.arcane {
    background-color: #999;
  }

  &.darkness {
    background-color: ${COLOR_BLACK};
    border: 1px solid #ccc;
  }

  &.water {
    background-color: ${COLOR_BLUE};
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
    background-color: ${COLOR_WHITE};
  }

  &.noAffinity {
    background: #bf40bf60;
  }

  &.team {
    margin-right: 5px;

    ${MOBILE_VIEW} {
      margin: 2px 2px 0;
      width: 10px;
      height: 10px;
    }
  }
`;
