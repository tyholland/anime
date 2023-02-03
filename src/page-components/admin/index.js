import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { useAppContext } from 'src/hooks/context';
import Error from 'PageComponents/error';
import TextField from 'Components/text-field';
import { $AdminWrapper, $AdminSection } from './admin.style';
import Select from 'Components/select';
import SocialMedia from 'Components/social-media';

const Admin = () => {
  const { currentUser } = useAppContext();
  const [errorPage, setErrorPage] = useState(false);
  const [editNum, setEditNum] = useState(false);
  const [editLeague, setEditLeague] = useState(false);
  const [leagueName, setLeagueName] = useState('Gangsta');
  const [teamNum, setTeamNum] = useState(10);
  const options = ['6', '7', '8', '9', '10'];
  let origin = '';

  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }

  const handleNumTeams = (e) => {
    // update number of teams
    setTeamNum(e.target.value);
  };

  const handleLeagueName = (e) => {
    // update league name
    setLeagueName(e.target.value);
  };

  const handleDeleteLeague = () => {
    // delete league
  };

  useEffect(() => {
    setErrorPage(!currentUser);
  }, [currentUser]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <$GameplayStyles />
      <Metadata
        title="Admin Settings"
        description="League Admin settings. You can change the number of teams in the league or the league name."
      />
      <$GlobalContainer>
        <$GlobalTitle>Admin Settings</$GlobalTitle>
        <Collapsible trigger="Basic" triggerTagName="div">
          <$AdminWrapper>
            <$AdminSection>
              {editNum && (
                <>
                  <Select
                    defaultVal="Number of Teams"
                    onChange={handleNumTeams}
                    options={options}
                  />
                  <Button
                    btnText="Cancel"
                    btnFunction={() => setEditNum(false)}
                    customBtnClass="text edit"
                  />
                </>
              )}
              {!editNum && (
                <>
                  <div>Number of Teams: {teamNum}</div>
                  <Button
                    btnText="Edit"
                    btnFunction={() => setEditNum(true)}
                    customBtnClass="small text edit"
                  />
                </>
              )}
            </$AdminSection>
            <$AdminSection>
              {editLeague && (
                <>
                  <TextField
                    placeholder="League Name"
                    onChange={handleLeagueName}
                  />
                  <Button
                    btnText="Cancel"
                    btnFunction={() => setEditLeague(false)}
                    customBtnClass="text edit"
                  />
                </>
              )}
              {!editLeague && (
                <>
                  <div>League Name: {leagueName}</div>
                  <Button
                    btnText="Edit"
                    btnFunction={() => setEditLeague(true)}
                    customBtnClass="text edit"
                  />
                </>
              )}
            </$AdminSection>
            <$AdminSection className="delete">
              <Button
                btnText="Delete League"
                btnFunction={handleDeleteLeague}
                customBtnClass="text"
              />
            </$AdminSection>
          </$AdminWrapper>
        </Collapsible>
        <Collapsible trigger="Teams" triggerTagName="div">
          <$AdminWrapper className="column">
            <ol>
              <li>Team 1</li>
              <li>Team 2</li>
              <li>Team 3</li>
              <li>Team 4</li>
              <li>Team 5</li>
              <li>Team 6</li>
              {teamNum === 7 && <li>Team 7</li>}
              {teamNum === 8 && (
                <>
                  <li>Team 7</li>
                  <li>Team 8</li>
                </>
              )}
              {teamNum === 9 && (
                <>
                  <li>Team 7</li>
                  <li>Team 8</li>
                  <li>Team 9</li>
                </>
              )}
              {teamNum === 10 && (
                <>
                  <li>Team 7</li>
                  <li>Team 8</li>
                  <li></li>
                  <li></li>
                </>
              )}
            </ol>
            <SocialMedia
              pageTitle="Invite friends to Join League"
              title={'Join my ABZ Fantasy League. League code: '}
              description="Build your ultimate anime team"
              singleHashtag="#abzFantasyLeague"
              pluralHashtags={['abz', 'abzFantasyLeague', 'animebrothaz']}
              url={`${origin}/league/join`}
            />
          </$AdminWrapper>
        </Collapsible>
      </$GlobalContainer>
    </>
  );
};

export default Admin;
