import React from "react";
import leagueStyles from "./leagues.json";
import { StyleSheet, View, Text } from "react-native";
import PropTypes from "prop-types";
import Button from "../button";

const Leagues = (props) => {
  return (
    <View style={styles.league}>
      <View>
        <Text style={styles.textContent}>{props.league}</Text>
        <Text style={styles.textContent}>{props.league}</Text>
      </View>
      <Button
        btnText="View Team"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor={styles.viewBtn}
        customBtnTextColor={styles.viewBtnText}
        redirect={() => props.setPage("Team")}
        setHeader={props.setHeader}
        header={true}
      />
    </View>
  );
};

Leagues.propTypes = {
  league: PropTypes.string,
  team: PropTypes.string,
  setPage: PropTypes.func,
  setHeader: PropTypes.func,
};

const styles = StyleSheet.create(leagueStyles);

export default Leagues;
