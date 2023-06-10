import React, { useState } from 'react';
import Button from 'Components/button/button';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './characterStats.style';
import MainModal from '../main/main';
import { useUserContext } from 'Hooks/user';
import ErrorMsg from 'Components/error-msg/error-msg';
import { CharacterStatsProps } from 'Utils/types';

const CharacterStats = ({
  isModalOpen,
  setIsModalOpen,
  character,
  votes,
  isMatchupPage = true,
  userId = null,
  isActive = null,
}: CharacterStatsProps) => {
  const { currentUser } = useUserContext();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 600,
      borderRadius: 15,
    },
  };

  if (!character) {
    return;
  }

  const { name, matchPoints, damage, boost, originalPower, teamPoints, rank } =
    character;
  const boostTotal = teamPoints - originalPower;
  const damageTotal = teamPoints - matchPoints;
  const activeVoting = votes.filter((vote: Record<string, any>) => vote.rank === rank);
  const canVote =
    currentUser.user_id === userId &&
    isMatchupPage &&
    isActive > 0 &&
    rank !== 'battlefield';

  const closeModal = () => {
    setErrorMsg(null);
    setIsModalOpen(false);
  };

  return (
    <MainModal
      modalIsOpen={isModalOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <GlobalStyles.GlobalTitle>{name}</GlobalStyles.GlobalTitle>
      {teamPoints === 0 && (
        <Styles.CharacterStatsScoring className="bye">
          Bye week
        </Styles.CharacterStatsScoring>
      )}
      {teamPoints > 0 && (
        <>
          <Styles.CharacterStatsScoring>
            <Styles.CharacterStatsLabel>Points</Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints>{originalPower}</Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          <Styles.CharacterStatsScoring>
            <Styles.CharacterStatsLabel>Boost</Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints>+ {boostTotal}</Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          <Styles.CharacterStatsScoring>
            <Styles.CharacterStatsLabel className="specific">
              Weekly Affinity
            </Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints className="specific">
              {boost.week}
            </Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          <Styles.CharacterStatsScoring>
            <Styles.CharacterStatsLabel className="specific">
              Support
            </Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints className="specific">
              {boost.support}
            </Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          <Styles.CharacterStatsScoring>
            <Styles.CharacterStatsLabel className="specific">
              Battlefield
            </Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints className="specific">
              {boost.battlefield}
            </Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          <Styles.CharacterStatsScoring>
            <Styles.CharacterStatsLabel className="specific">
              Voting
            </Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints className="specific">
              {boost.voting}
            </Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          {isMatchupPage && (
            <>
              <Styles.CharacterStatsScoring>
                <Styles.CharacterStatsLabel>Damage</Styles.CharacterStatsLabel>
                <Styles.CharacterStatsPoints>- {damageTotal}</Styles.CharacterStatsPoints>
              </Styles.CharacterStatsScoring>
              <Styles.CharacterStatsScoring>
                <Styles.CharacterStatsLabel className="specific">
                  Weekly Affinity
                </Styles.CharacterStatsLabel>
                <Styles.CharacterStatsPoints className="specific">
                  {damage.week}
                </Styles.CharacterStatsPoints>
              </Styles.CharacterStatsScoring>
              <Styles.CharacterStatsScoring>
                <Styles.CharacterStatsLabel className="specific">
                  Villain
                </Styles.CharacterStatsLabel>
                <Styles.CharacterStatsPoints className="specific">
                  {damage.villain}
                </Styles.CharacterStatsPoints>
              </Styles.CharacterStatsScoring>
              <Styles.CharacterStatsScoring>
                <Styles.CharacterStatsLabel className="specific">
                  Battlefield
                </Styles.CharacterStatsLabel>
                <Styles.CharacterStatsPoints className="specific">
                  {damage.battlefield}
                </Styles.CharacterStatsPoints>
              </Styles.CharacterStatsScoring>
              <Styles.CharacterStatsScoring>
                <Styles.CharacterStatsLabel className="specific">
                  Voting
                </Styles.CharacterStatsLabel>
                <Styles.CharacterStatsPoints className="specific">
                  {damage.voting}
                </Styles.CharacterStatsPoints>
              </Styles.CharacterStatsScoring>
            </>
          )}
          <Styles.CharacterStatsScoring className="total">
            <Styles.CharacterStatsLabel>Total Points</Styles.CharacterStatsLabel>
            <Styles.CharacterStatsPoints>
              {isMatchupPage ? (matchPoints < 0 ? 0 : matchPoints) : teamPoints}
            </Styles.CharacterStatsPoints>
          </Styles.CharacterStatsScoring>
          {!!errorMsg && <ErrorMsg msg={errorMsg} />}
        </>
      )}
      <Styles.CharacterStatsBtnWrapper>
        {!!activeVoting.length && canVote && (
          <Button
            btnText="View Voting Status"
            btnColor="primary"
            customBtnClass="medium"
            redirect={`/matchup/vote?vote_id=${activeVoting[0].id}`}
          />
        )}
        <Button
          btnText="Close"
          btnColor="cancel"
          customBtnClass="medium"
          btnFunction={closeModal}
        />
      </Styles.CharacterStatsBtnWrapper>
    </MainModal>
  );
};

export default CharacterStats;
