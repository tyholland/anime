import styled from 'styled-components';

export const FaqWrapper = styled.div`
  padding: 5% 2%;

  iframe {
    border: none;
  }
`;

export const FaqAccordian = styled.div`
  .collapseContainer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .down {
    rotate: 90deg;
  }

  .up {
    rotate: 270deg;
  }
`;
