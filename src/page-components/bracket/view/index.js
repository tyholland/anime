import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import {
  $ViewLeagueEmptyTitle,
  $ViewLeagueEmptyBtnWrapper,
  $ViewLeaguePast
} from 'PageComponents/league/view/view.style';
import { $BracketViewContainer } from '../bracket.style';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { addEvent } from 'Utils/amplitude';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';
import ReadMore from 'Components/read-more';
import { getAllBrackets } from 'src/requests/bracket';

const ViewBrackets = () => {
  const { currentUser } = useAppContext();
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
      <$GlobalContainer>
        <$GlobalTitle className="bracketView">
              Your Brackets
          <Button
            btnText="Add New"
            btnColor="secondary"
            redirect="/bracket/create"
            customBtnClass="small"
          />
        </$GlobalTitle>
        {isLoading && <Loader />}
        {!!bracketList?.length && !isLoading && (
          <$BracketViewContainer>{bracketList}</$BracketViewContainer>
        )}
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
        {!!activeBracketList?.length && !isLoading && (
          <$ViewLeaguePast>
            <$GlobalTitle>All Active Brackets</$GlobalTitle>
            <$BracketViewContainer>
              {activeBracketList}
            </$BracketViewContainer>
          </$ViewLeaguePast>
        )}
      </$GlobalContainer>
      <ReadMore />
    </>
  );
};

export default ViewBrackets;
