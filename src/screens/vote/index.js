import React from "react";
import voteStyles from "./vote.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Pressable,
  Alert
} from "react-native";
import Button from "../../components/button";
import PropTypes from "prop-types";
import BackLink from "../../components/back-link";

const Vote = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning
      ]}
    >
      <BackLink redirect={() => props.setPage("VoteMatchup")} />
      <Text style={styles.character}>Goku</Text>
      <Text style={styles.team}>Jack Of All Trades</Text>
      <Button
        btnText="Vote for Goku"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor={styles.btn}
        redirect={() => Alert.alert("This functional hasn't been created yet")}
      />
      <Text style={styles.versus}>VS</Text>
      <Text style={[styles.character, styles.opponent]}>Sung Jin Woo</Text>
      <Text style={[styles.team, styles.opponent]}>Z Fighters</Text>
      <Button
        btnText="Vote for Sung Jin Woo"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor={styles.btn}
        viewStyle={styles.btnContainer}
        redirect={() => Alert.alert("This functional hasn't been created yet")}
      />
    </View>
  );
};

Vote.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(voteStyles);
const global = StyleSheet.create(globalStyles);

export default Vote;
