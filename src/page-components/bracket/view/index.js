import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import {
  $ViewLeagueEmptyTitle,
  $ViewLeagueEmptyBtnWrapper,
} from 'PageComponents/league/view/view.style';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { addEvent } from 'Utils/amplitude';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';
import { getAllBrackets } from 'src/requests/bracket';

const ViewBrackets = () => {
  const { currentUser } = useAppContext();
  const [bracketList, setBracketList] = useState(null);
  const [account, setAccount] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAllBrackets = async () => {
    setIsLoading(true);

    try {
      const brackets = await getAllBrackets(currentUser?.token);
      const card = brackets.map((item, index) => {
        return (
          <div key={item.id}>
            <Button
              btnText={`Bracket #${index + 1}`}
              btnColor="primary"
              customBtnClass="leagues"
              redirect={`/bracket?bracket_id=${item.id}`}
            />
          </div>
        );
      });

      setBracketList(card);
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all brackets view'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (account) {
      handleAllBrackets();
    }
  }, [account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="View Leagues"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <$GlobalContainer>
            <$GlobalTitle>All Brackets</$GlobalTitle>
            {isLoading && <Loader />}
            {!!bracketList?.length && !isLoading && bracketList}
            {!bracketList?.length && !isLoading && (
              <>
                <$ViewLeagueEmptyTitle>
                  You haven't built any brackets yet.
                </$ViewLeagueEmptyTitle>
                <$ViewLeagueEmptyBtnWrapper>
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
                </$ViewLeagueEmptyBtnWrapper>
              </>
            )}
            <ReadMore />
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default ViewBrackets;
