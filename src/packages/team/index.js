import React from 'react';
import teamStyles from './team.json';
import globalStyles from '../../../global.json';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Platform,
  Pressable,
  Alert,
} from 'react-native';
import Button from '../../components/button';
import PropTypes from 'prop-types';
import Squad from '../../components/squad';

const Team = (props) => {
  return (
    <View
      style={[
        Platform.OS === 'ios'
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
        styles.containerTop,
      ]}
    >
      <ScrollView>
        <View style={styles.teamInfo}>
          <View style={styles.teamContent}>
            <Text style={styles.teamName}>Jack Of All Trades</Text>
            <Text style={styles.league}>Anime Ballers</Text>
            <Text style={styles.teamOwner}>John Smith</Text>
            <Text style={styles.teamRecord}>4-1</Text>
          </View>
          <View>
            <Pressable
              style={styles.infoContent}
              onPress={() => props.setPage('TeamInfo')}
            >
              <Text style={styles.infoTxt}>Team Info</Text>
            </Pressable>
            <Text style={styles.points}>1000 pts left</Text>
          </View>
        </View>
        <Squad setPage={props.setPage} />
        <View style={styles.total}>
          <Text style={[styles.totalText, styles.bold]}>Total</Text>
          <Text style={[styles.totalAmount, styles.bold]}>9000</Text>
        </View>
        <Squad setPage={props.setPage} type="Bench" />
      </ScrollView>
      <Button
        btnText="Edit"
        btnTextColor="black"
        btnColor="orange"
        customBtnColor={styles.editBtn}
        viewStyle={Platform.OS === 'ios' ? styles.iosBtn : styles.androidBtn}
        redirect={() => Alert.alert('This page hasn\'t been created yet')}
      />
    </View>
  );
};

Team.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(teamStyles);
const global = StyleSheet.create(globalStyles);

export default Team;
