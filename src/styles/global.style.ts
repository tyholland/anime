import styled, { createGlobalStyle } from 'styled-components';

// Colors
export const COLOR_ORANGE = 'rgb(249, 128, 17)';
export const COLOR_ORANGE_DISABLED = '#ffd7b5';
export const COLOR_ORANGE_LIGHT = '#ff9248';
export const COLOR_ORANGE_EXTRA_LIGHT = '#ffb38a';
export const COLOR_OFF_ORANGE = '#f6b26b';
export const COLOR_RED = '#cc0000';
export const COLOR_RED_LIGHT = '#ffb2b2';
export const COLOR_SUCCESS = '#4BB543';
export const COLOR_ERROR = '#cc000080';
export const COLOR_WHITE = '#ffffff';
export const COLOR_WHITE_TRANSPARENT = '#ffffff95';
export const COLOR_DARK_WHITE = '#f3f6f4';
export const COLOR_BLACK = '#000000';
export const COLOR_BLACK_DISABLED = '#00000010';
export const COLOR_OFF_BLACK = '#232b2b';
export const COLOR_GREY = '#CDCDCD';
export const COLOR_GREY_LIGHT = '#CDCDCD80';
export const COLOR_GREY_EXTRA_LIGHT = '#CDCDCD30';
export const COLOR_BLUE = 'rgb(27, 5, 246)';
export const COLOR_BLUE_HOVER = '#0066cc';
export const COLOR_DISCLAIMER = '#7BB0D0';
export const COLOR_OVERLAY = '#00000090';
export const COLOR_YELLOW = '#ffbf00';
export const COLOR_YELLOW_LIGHT = '#fedc56';

// Font Sizes
export const FONT_SIZE_EXTRA_SMALL = '10px';
export const FONT_SIZE_SMALL = '14px';
export const FONT_SIZE_MEDIUM = '16px';
export const FONT_SIZE_LARGE = '18px';
export const FONT_SIZE_EXTRA_LARGE = '20px';
export const FONT_SIZE_GIGANTIC = '30px';

// Font Weights
export const FONT_WEIGHT_BOLD = '700';
export const FONT_WEIGHT_NORMAL = '400';

// Media Breaks
export const RESPONSIVE_VIEW = '@media only screen and (max-width: 1160px)';
export const MOBILE_VIEW = '@media only screen and (max-width: 600px)';

// Global Styles
export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0 auto;
    min-width: 960px;
    max-width: 1200px;
    font-family: Arial, sans-serif;
    background: ${COLOR_OFF_BLACK};
    color: ${COLOR_WHITE};

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

export const CollapsibleStyles = createGlobalStyle`
  .Collapsible {
    padding: 2%;
    border: 1px solid ${COLOR_BLACK};
    border-bottom: none;
    background: ${COLOR_DARK_WHITE};
    color: ${COLOR_BLACK};

    div[role="button"] {
      font-weight: ${FONT_WEIGHT_BOLD};
      font-size: ${FONT_SIZE_LARGE};
      cursor: pointer;
    }

    &[content="bio"]
    .Collapsible__contentInner {
      overflow-y: scroll;
      height: 115px;
      margin-top: 3%;
    }
  }

  .Collapsible:last-child {
    border-bottom: 1px solid ${COLOR_BLACK};
  }
`;

// Global Variables
export const GlobalContainer = styled.div`
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

  &.notUser {
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      background-image: url(/assets/background/naruto-rasengan.webp);
    }
  }

  &.inactiveDraft {
    display: flex;
    flex-direction: column;
    align-items: center;

    &::before {
      background-image: url(/assets/background/kakashi-sharigan.webp);
    }
  }

  &.character {
    align-items: center;
    flex-direction: column;

    &::before {
      background-image: none;
    }
  }

  &.roster {
    justify-content: space-between;

    > div {
      width: 100%;
      max-width: 800px;
    }
  }

  &.leagueCharacter {
    position: relative;
    height: auto;
    flex-direction: column;
    align-items: center;

    ${RESPONSIVE_VIEW} {
      padding: 0;
    }

    button {
      z-index: 1;
    }
  }

  &.homeSection {
    background: ${COLOR_ORANGE_LIGHT};
    min-height: auto;
    padding: 5% 3%;
  }

  &.homeEven {
    background: ${COLOR_OFF_BLACK};
  }

  &#suggest {
    color: ${COLOR_BLACK};
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

    button {
      width: 220px;
      margin: 1% 0;
      background: transparent;
      border: none;
      font-size: ${FONT_SIZE_MEDIUM};
      color: ${COLOR_DARK_WHITE};

      &:hover {
        text-decoration: underline;
      }

      ${MOBILE_VIEW} {
        width: 45%;
        margin: 1% 5% 1% 0;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        text-align: left;
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

export const GlobalTitle = styled.div`
  font-weight: ${FONT_WEIGHT_BOLD};
  margin-bottom: 5%;
  font-size: ${FONT_SIZE_GIGANTIC};
  text-align: center;
  position: relative;

  &.home,
  &.champ {
    background: ${COLOR_WHITE};
    width: 400px;
    margin: 0 auto;
    padding: 2%;
    border-radius: 15px;
    color: ${COLOR_BLACK};

    ${RESPONSIVE_VIEW} {
      width: 56%;
    }

    ${MOBILE_VIEW} {
      width: 96%;
    }
  }

  &.champ {
    margin-top: 2%;
    background: ${COLOR_ORANGE};
  }

  ${RESPONSIVE_VIEW} {
    font-size: calc(100% + ${FONT_SIZE_EXTRA_SMALL});
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

export const GlobalSubTitle = styled.div`
  margin-bottom: 2%;
  font-size: ${FONT_SIZE_EXTRA_LARGE};
  text-align: center;

  &.matchup {
    font-size: ${FONT_SIZE_MEDIUM};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    div {
      display: flex;
      margin-bottom: 1%;
    }
  }

  &.suggest {
    width: 80%;
  }
`;

export const GlobalCircle = styled.div`
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  &.fire {
    background-image: url(/assets/icons/fire.webp);
  }

  &.arcane {
    background-image: url(/assets/icons/arcane.webp);
  }

  &.darkness {
    background-image: url(/assets/icons/darkness.webp);
  }

  &.water {
    background-image: url(/assets/icons/water.webp);
  }

  &.ice {
    background-image: url(/assets/icons/ice.webp);
  }

  &.electric {
    background-image: url(/assets/icons/electric.webp);
  }

  &.wind {
    background-image: url(/assets/icons/wind.webp);
  }

  &.earth {
    background-image: url(/assets/icons/earth.webp);
  }

  &.celestial {
    background-image: url(/assets/icons/celestial.webp);
  }

  &.noAffinity {
    background-image: url(/assets/icons/no-affinity.webp);
  }

  &.team {
    margin-right: 5px;

    ${MOBILE_VIEW} {
      margin: 2px 2px 0;
      width: 14px;
      height: 14px;
    }
  }
`;
