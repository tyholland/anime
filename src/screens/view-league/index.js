import React from "react";
import leagueStyles from "./view-league.json";
import globalStyles from "../../../global.json";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import Leagues from "../../components/leagues";
import PropTypes from "prop-types";

const ViewLeague = (props) => {
  return (
    <ScrollView>
      <View style={global.container}>
        <View style={styles.content}>
          <Text style={global.title}>Your Leagues</Text>
        </View>
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
        <Leagues
          league="League Name"
          team="Team Name"
          setPage={props.setPage}
          setHeader={props.setHasHeader}
        />
      </View>
    </ScrollView>
  );
};

ViewLeague.propTypes = {
  setPage: PropTypes.func,
  setHasHeader: PropTypes.func,
};

const styles = StyleSheet.create(leagueStyles);
const global = StyleSheet.create(globalStyles);

export default ViewLeague;
