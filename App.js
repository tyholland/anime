import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import Forgot from "./src/screens/forgot";
import Home from "./src/screens/home";
import ViewLeague from "./src/screens/view-league";
import VoteMatchup from "./src/screens/vote-matchup";
import JoinLeague from "./src/screens/join-league";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Forgot /> */}
      {/* <Home /> */}
      {/* <ViewLeague /> */}
      {/* <VoteMatchup /> */}
      <JoinLeague />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
});

export default App;
