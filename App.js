import React from 'react';
import { View, Dimensions, StyleSheet } from 'react-native';
import SignIn from "./src/screens/sign-in";
import SignUp from "./src/screens/sign-up";
import Forgot from "./src/screens/forgot";
import Home from "./src/screens/home";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <SignIn /> */}
      {/* <SignUp /> */}
      <Forgot />
      {/* <Home /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
});

export default App;
