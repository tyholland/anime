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

const App = () => {
  const [page, setPage] = useState("SignIn");
  const [hasHeader, setHasHeader] = useState(false);

  return (
    <View style={styles.container}>
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
      {page === "JoinLeague" && (
        <JoinLeague setPage={setPage} setHasHeader={setHasHeader} />
      )}
      {hasHeader ? (
        <>
          <Header setPage={setPage} setHasHeader={setHasHeader} page={page} />
          {page === "ViewMatchup" && <ViewMatchup />}
          {page === "Team" && <Team setPage={setPage} />}
          {page === "Bio" && <Bio setPage={setPage} />}
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
