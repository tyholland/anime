import React from "react";
import votingStyles from "./settings.json";
import globalStyles from "../../../global.json";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
} from "react-native";
import PropTypes from "prop-types";
import BackLink from "../../components/back-link";

const Voting = (props) => {
  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage("LeagueSettings")} />
      <ScrollView style={styles.scrollPadding}>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Initiate User Voting</Text>
          <Text>Team A can initiate User Voting by going to their Matchup. Then clicking on a character's points, that'll open up that characters point break down. Then they can click the button to get votes. After User Voting has been initiated, then team B can not initiate their own User Voting for the same Head-to-Head Battle.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>Can the other team get User Voting?</Text>
          <Text>Team B can use that same User Voting initiated by team A to get their character to win the Head-to-Head Battle. If team B gets more votes, that will result in team A losing points and team B gaining points.</Text>
        </View>
        <View style={styles.paragraph}>
          <Text style={styles.label}>What about a Tie in Voting</Text>
          <Text>In the event of a tie in User Voting. Neither team gains or loses and points.</Text>
        </View>
      </ScrollView>
    </View>
  );
};

Voting.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(votingStyles);
const global = StyleSheet.create(globalStyles);

export default Voting;
