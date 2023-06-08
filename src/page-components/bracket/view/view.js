import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import * as Styles from 'PageComponents/league/view/view.style';
import * as BracketStyles from '../bracket.style';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error/error';
import { addEvent } from 'Utils/amplitude';
import { useUserContext } from 'src/hooks/user';
import Loader from 'Components/loader/loader';
import ReadMore from 'Components/read-more/read-more';
import { getAllBrackets } from 'src/requests/bracket';

const ViewBrackets = () => {
  const { currentUser } = useUserContext();
  const [bracketList, setBracketList] = useState(null);
  const [activeBracketList, setActiveBracketList] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAllBrackets = async () => {
    setIsLoading(true);

    try {
      const { userBrackets, allBrackets } = await getAllBrackets(currentUser?.user_id);

      const activeBrackets = allBrackets.map((item, index) => {
        return (
          <div key={item.id}>
            <Button
              btnText={item.name || `Bracket #${index + 1}`}
              btnColor="primary"
              customBtnClass="leagues"
              redirect={`/bracket?bracket_id=${item.id}`}
            />
          </div>
        );
      });

      const userSpecific = userBrackets.map((item, index) => {
        return (
          <div key={item.id}>
            <Button
              btnText={item.name || `Bracket #${index + 1}`}
              btnColor="primary"
              customBtnClass="leagues"
              redirect={`/bracket?bracket_id=${item.id}`}
            />
          </div>
        );
      });

      setBracketList(userSpecific);
      setActiveBracketList(activeBrackets);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all brackets view'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleAllBrackets();
  }, []);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="View Brackets"
        description="View all your brackets that you have created. Also decide to create a new bracket. Never can have enough brackets."
      />
      <GlobalStyles.GlobalContainer>
        <GlobalStyles.GlobalTitle className="bracketView">
              Your Brackets
          <Button
            btnText="Add New"
            btnColor="secondary"
            redirect="/bracket/create"
            customBtnClass="small"
          />
        </GlobalStyles.GlobalTitle>
        {isLoading && <Loader />}
        {!!bracketList?.length && !isLoading && (
          <BracketStyles.BracketViewContainer>{bracketList}</BracketStyles.BracketViewContainer>
        )}
        {!bracketList?.length && !isLoading && (
          <>
            <Styles.ViewLeagueEmptyTitle>
                  You haven't built any brackets yet.
            </Styles.ViewLeagueEmptyTitle>
            <Styles.ViewLeagueEmptyBtnWrapper>
              <Button
                btnText="Create a Bracket"
                redirect="/bracket/create"
                btnColor="primary"
                customBtnClass="medium"
              />
              <Button
                btnText="Create a League"
                redirect="/league/create"
                btnColor="primary"
                customBtnClass="medium"
              />
            </Styles.ViewLeagueEmptyBtnWrapper>
          </>
        )}
        {!!activeBracketList?.length && !isLoading && (
          <Styles.ViewLeaguePast>
            <GlobalStyles.GlobalTitle>All Active Brackets</GlobalStyles.GlobalTitle>
            <BracketStyles.BracketViewContainer>
              {activeBracketList}
            </BracketStyles.BracketViewContainer>
          </Styles.ViewLeaguePast>
        )}
      </GlobalStyles.GlobalContainer>
      <ReadMore />
    </>
  );
};

export default ViewBrackets;
