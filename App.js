import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import Forgot from "./src/screens/forgot";
import Home from "./src/screens/home";
import ViewLeague from "./src/screens/view-league";
import VoteMatchup from "./src/screens/vote-matchup";
import JoinLeague from "./src/screens/join-league";
import Footer from "./src/components/footer";
import Header from "./src/components/header";
import Team from "./src/screens/team";
import Bio from "./src/screens/bio";
import ViewMatchup from "./src/screens/view-matchup";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      {/* <Forgot /> */}
      {/* <Home /> */}
      {/* <ViewLeague /> */}
      {/* <VoteMatchup /> */}
      {/* <JoinLeague /> */}
      <Header />
      <ViewMatchup />
      {/* <Team /> */}
      {/* <Bio /> */}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
});

export default App;
