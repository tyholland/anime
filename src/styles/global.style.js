import styled, { createGlobalStyle } from 'styled-components';

export const COLOR_ORANGE = 'rgb(249, 128, 17)';
export const COLOR_ORANGE_DISABLED = 'rgba(249, 128, 17, 0.8)';
export const COLOR_ORANGE_LIGHT = 'rgba(249, 128, 17, 0.3)';
export const COLOR_ORANGE_EXTRA_LIGHT = 'rgba(249,128,17,0.15)';
export const COLOR_RED = '#cc0000';
export const COLOR_SUCCESS = '#4BB543';
export const COLOR_ERROR = '#cc000080';
export const COLOR_WHITE = '#ffffff';
export const COLOR_WHITE_TRANSPARENT = '#ffffff95';
export const COLOR_BLACK = '#000000';
export const COLOR_BLACK_DISABLED = '#00000010';
export const COLOR_GREY = '#CDCDCD';
export const COLOR_GREY_LIGHT = '#CDCDCD80';
export const COLOR_GREY_EXTRA_LIGHT = '#CDCDCD30';
export const COLOR_BLUE = 'rgb(27, 5, 246)';
export const COLOR_BLUE_HOVER = '#0066cc';
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
  position: relative;
  min-height: 70vh;

  ${RESPONSIVE_VIEW} {
    padding: 3% 3% 5%;
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
    width: 75%;
    margin: 0 auto;

    ${RESPONSIVE_VIEW} {
      width: 100%;
    }
  }

  &.schedule {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &.invalid {
    flex-direction: column;
    padding: 2%;
    min-height: 0;

    button {
      margin-left: 0;
    }
  }

  &.bgImage {
    position: relative;
    height: auto;

    &::before {
      content: " ";
      background-image: url(/assets/background/itachi.webp);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      filter: grayscale(100%);
      min-height: 0;

      ${RESPONSIVE_VIEW} {
        background-size: 100% 100%;
      }
    }
  }

  &.leagueDetail {
    > button {
      margin: 0;
    }

    &::before {
      background-image: url(/assets/background/goku-kamehameha.webp);
    }
  }

  &.home {
    min-height: auto;

    &::before {
      background-image: url(/assets/background/itachi.webp);
    }
  }

  &.notFound {
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      background-image: url(/assets/background/deku-allmight.webp);
    }
  }

  &.league {
    &::before {
      background-image: url(/assets/background/naruto-rasengan.webp);
      filter: grayscale(85%);
    }
  }

  &.resource {
    &::before {
      background-image: url(/assets/background/kakashi-sharigan.webp);
    }
  }

  &.character {
    align-items: center;
    flex-direction: column;

    &::before {
      background-image: url(/assets/background/young-goku.webp);
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
      background-image: url(/assets/background/saitama.webp);
      background-size: 250px;
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      top: 24%;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }

    ${RESPONSIVE_VIEW} {
      padding: 0;
    }
  }

  &.homeSection {
    background: ${COLOR_ORANGE_EXTRA_LIGHT};
    min-height: auto;
    padding: 5% 3%;
  }

  &.homeEven {
    background: ${COLOR_WHITE};
  }

  .series {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
    width: 900px;
    text-align: center;

    ${RESPONSIVE_VIEW} {
      width: 700px;
    }

    ${MOBILE_VIEW} {
      width: 100%;
      text-align: left;
    }

    div {
      width: 220px;
      margin: 1% 0;

      ${MOBILE_VIEW} {
        width: 45%;
        margin: 1% 5% 1% 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

  .seriesTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 5% 0;
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

  &.bracketView,
  &.bracket {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin: 0 0 0 3%;
    }
  }

  &.bracket {
    margin-bottom: 0;

    ${MOBILE_VIEW} {
      margin-bottom: 5%;
    }
  }

  &.matchup {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2%;

    ${MOBILE_VIEW} {
      margin-bottom: 5%;
    }

    button {
      margin: 0 0 0 1%;
    }
  }
`;

export const $GlobalSubTitle = styled.div`
  margin-bottom: 2%;
  font-size: 20px;
  text-align: center;

  &.matchup {
    font-size: 16px;
  }
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

export const $CollapsibleStyles = createGlobalStyle`
  .Collapsible {
    padding: 2%;
    border: 1px solid ${COLOR_BLACK};
    border-bottom: none;

    div[role="button"] {
      font-weight: ${FONT_WEIGHT_BOLD};
      font-size: 18px;
      cursor: pointer;
    }
  }

  .Collapsible:last-child {
    border-bottom: 1px solid ${COLOR_BLACK};
  }
`;
