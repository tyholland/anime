import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import Forgot from "./src/screens/forgot";
import Home from "./src/screens/home";
import ViewLeague from "./src/screens/view-league";
import VoteMatchup from "./src/screens/vote-matchup";
import JoinLeague from "./src/screens/join-league";
import Header from "./src/components/header";
import Team from "./src/screens/team";
import Bio from "./src/screens/bio";
import ViewMatchup from "./src/screens/view-matchup";
import Settings from "./src/screens/settings";
import TeamInfo from "./src/screens/team-info";
import Vote from "./src/screens/vote";
import Resources from "./src/screens/settings/resources";
import Suggestions from "./src/screens/settings/suggestion";
import LeagueSettings from "./src/screens/settings/league-settings";
import Affinities from "./src/screens/settings/affinities";
import Boost from "./src/screens/settings/boost";
import Loss from "./src/screens/settings/loss";
import Voting from "./src/screens/settings/voting";

const App = () => {
  const [page, setPage] = useState("SignIn");
  const [hasHeader, setHasHeader] = useState(false);

  return (
    <View style={styles.container}>
      <Header
        setPage={setPage}
        setHasHeader={setHasHeader}
        page={page}
        hasHeader={hasHeader}
      />
      {page === "SignIn" && <SignIn setPage={setPage} />}
      {page === "SignUp" && <SignUp setPage={setPage} />}
      {page === "Forgot" && <Forgot setPage={setPage} />}
      {page === "Home" && <Home setPage={setPage} />}
      {page === "ViewLeague" && (
        <ViewLeague setPage={setPage} setHasHeader={setHasHeader} />
      )}
      {page === "VoteMatchup" && (
        <VoteMatchup setPage={setPage} setHasHeader={setHasHeader} />
      )}
      {page === "Vote" && <Vote setPage={setPage} />}
      {page === "JoinLeague" && (
        <JoinLeague setPage={setPage} setHasHeader={setHasHeader} />
      )}
      {hasHeader ? (
        <>
          {page === "ViewMatchup" && <ViewMatchup setPage={setPage} />}
          {page === "Team" && <Team setPage={setPage} />}
          {page === "Bio" && <Bio setPage={setPage} />}
          {page === "Settings" && (
            <Settings setPage={setPage} setHasHeader={setHasHeader} />
          )}
          {page === "Resources" && <Resources setPage={setPage} />}
          {page === "Suggestions" && <Suggestions setPage={setPage} />}
          {page === "LeagueSettings" && <LeagueSettings setPage={setPage} />}
          {page === "Affinity" && <Affinities setPage={setPage} />}
          {page === "Boost" && <Boost setPage={setPage} />}
          {page === "Loss" && <Loss setPage={setPage} />}
          {page === "Voting" && <Voting setPage={setPage} />}
          {page === "TeamInfo" && <TeamInfo setPage={setPage} />}
        </>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
});

export default App;
