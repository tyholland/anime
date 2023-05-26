import React from 'react';
import * as GlobalStyles from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main/main';
import Button from 'Components/button/button';
import * as Styles from './recap.style';

const Recap = ({ data, modalIsOpen, closeModal, teamName }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: 100,
      width: 300,
      borderRadius: 15,
    },
  };

  if (!data) {
    return;
  }

  const { winner, loser, score, week } = data;

  return (
    <MainModal
      modalIsOpen={modalIsOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <GlobalStyles.GlobalContainer className="invalid">
        <Styles.RecapWrapper>
          <Styles.RecapWeek>Week {week} Results:</Styles.RecapWeek>
          <h1>You {winner === teamName ? 'Won' : 'Lost'}</h1>
          <Styles.RecapAgainst>
            against {winner === teamName ? loser : winner}
          </Styles.RecapAgainst>
          <div>
            <strong>Score:</strong> {score}
          </div>
        </Styles.RecapWrapper>
        <Styles.RecapWrapper className="btn">
          <Button
            btnFunction={closeModal}
            btnText="Close"
            btnColor="cancel"
            customBtnClass="small"
          />
        </Styles.RecapWrapper>
      </GlobalStyles.GlobalContainer>
    </MainModal>
  );
};

export default Recap;
