import React from "react";
import matchupStyles from "./view-matchup.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, ScrollView, Platform } from "react-native";
import HomeTeam from "../../components/home-team";
import AwayTeam from "../../components/away-team";
import PropTypes from "prop-types";

const ViewMatchup = (props) => {
  return (
    <View
      style={
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning
      }
    >
      <ScrollView>
        <View style={styles.matchup}>
          <View style={styles.teamContent}>
            <Text style={styles.teamName}>Jack Of All Trades</Text>
            <Text style={styles.teamTotal}>9000</Text>
          </View>
          <View style={styles.teamContent}>
            <Text style={styles.teamName}>Z Fighters</Text>
            <Text style={styles.teamTotal}>9000</Text>
          </View>
        </View>
        <View style={styles.teamSplit}>
          <HomeTeam setPage={props.setPage} />
          <View style={styles.positionColumn}>
            <View style={styles.positionSection}>
              <Text style={styles.position}>C</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>B</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>B</Text>
            </View>
            <View style={styles.duoPositionSection}>
              <Text style={styles.duoPosition}>B/S</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>S</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>V</Text>
            </View>
            <View style={styles.positionSection}>
              <Text style={styles.position}>BF</Text>
            </View>
          </View>
          <AwayTeam />
        </View>
      </ScrollView>
    </View>
  );
};

ViewMatchup.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(matchupStyles);
const global = StyleSheet.create(globalStyles);

export default ViewMatchup;
