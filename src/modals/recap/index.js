import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import MainModal from '../main';
import Button from 'Components/button';
import { $RecapWrapper, $RecapWeek, $RecapAgainst } from './recap.style';

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
      <$GlobalContainer className="invalid">
        <$RecapWrapper>
          <$RecapWeek>Week {week} Results:</$RecapWeek>
          <h1>You {winner === teamName ? 'Won' : 'Lost'}</h1>
          <$RecapAgainst>
            against {winner === teamName ? loser : winner}
          </$RecapAgainst>
          <div>
            <strong>Score:</strong> {score}
          </div>
        </$RecapWrapper>
        <$RecapWrapper className="btn">
          <Button
            btnFunction={closeModal}
            btnText="Close"
            btnColor="cancel"
            customBtnClass="small"
          />
        </$RecapWrapper>
      </$GlobalContainer>
    </MainModal>
  );
};

export default Recap;
