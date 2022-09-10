import React from 'react';
import squadStyles from './squad.json';
import globalStyles from '../../../global.json';
import { StyleSheet, View, Pressable, Text, Platform } from 'react-native';
import PropTypes from 'prop-types';

const Squad = (props) => {
  const isBench = props.type && props.type === 'Bench';

  return (
    <>
      <View style={[styles.section, styles.headerSection]}>
        <Text style={[styles.position, styles.none]}></Text>
        <Text style={[styles.character, styles.bold]}>
          {isBench ? 'Bench' : 'Starters'}
        </Text>
        <Text style={[styles.affinity, styles.bold]}>Affinity</Text>
        <Text style={[styles.power, styles.bold]}>Power Level</Text>
      </View>
      <View
        style={
          isBench
            ? Platform.OS === 'ios'
              ? styles.iosContainerBottom
              : styles.androidContainerBottom
            : ''
        }
      >
        <View style={styles.section}>
          <Text style={styles.position}>{isBench ? 'BN' : 'C'}</Text>
          <Pressable
            onPress={() => props.setPage('Bio')}
            style={styles.character}
          >
            <Text style={styles.characterTxt}>Goku</Text>
          </Pressable>
          <Text style={styles.affinity}>-</Text>
          <Text style={styles.power}>1500</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.position}>{isBench ? 'BN' : 'B'}</Text>
          <Pressable
            onPress={() => props.setPage('Bio')}
            style={styles.character}
          >
            <Text style={styles.characterTxt}>Arthur Boyle</Text>
          </Pressable>
          <Text style={styles.affinity}>
            <View style={[global.circle, global.fireAffinity]}></View>
          </Text>
          <Text style={styles.power}>1250</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.position}>{isBench ? 'BN' : 'B'}</Text>
          <Pressable
            onPress={() => props.setPage('Bio')}
            style={styles.character}
          >
            <Text style={styles.characterTxt}>Genos</Text>
          </Pressable>
          <Text style={styles.affinity}>
            <View style={[global.circle, global.fireAffinity]}></View>
          </Text>
          <Text style={styles.power}>1250</Text>
        </View>
        {!isBench && (
          <View style={styles.section}>
            <Text style={[styles.position, styles.duo]}>B/S</Text>
            <View style={styles.character}>
              <Pressable onPress={() => props.setPage('Bio')}>
                <Text style={[styles.duoText, styles.duoSpace]}>Rock Lee</Text>
              </Pressable>
              <Pressable onPress={() => props.setPage('Bio')}>
                <Text style={[styles.duoText, styles.duoSpace]}>Tenten</Text>
              </Pressable>
            </View>
            <View style={styles.affinity}>
              <Text style={styles.duoSpace}>-</Text>
              <Text style={styles.duoSpace}>-</Text>
            </View>
            <View style={styles.power}>
              <Text style={[global.right, styles.duoSpace]}>1250</Text>
              <Text style={[global.right, styles.duoSpace]}>1000</Text>
            </View>
          </View>
        )}
        <View style={styles.section}>
          <Text style={styles.position}>{isBench ? 'BN' : 'S'}</Text>
          <Pressable
            onPress={() => props.setPage('Bio')}
            style={styles.character}
          >
            <Text style={styles.characterTxt}>Chad</Text>
          </Pressable>
          <Text style={styles.affinity}>-</Text>
          <Text style={styles.power}>1000</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.position}>{isBench ? 'BN' : 'V'}</Text>
          <Pressable
            onPress={() => props.setPage('Bio')}
            style={styles.character}
          >
            <Text style={styles.characterTxt}>Sasori</Text>
          </Pressable>
          <Text style={styles.affinity}>-</Text>
          <Text style={styles.power}>1250</Text>
        </View>
        {!isBench && (
          <View style={styles.section}>
            <Text style={styles.position}>BF</Text>
            <Pressable
              onPress={() => props.setPage('Bio')}
              style={styles.character}
            >
              <Text style={styles.characterTxt}>Soul Society</Text>
            </Pressable>
            <Text style={styles.affinity}>
              <View style={[global.circle, global.arcaneAffinity]}></View>
            </Text>
            <Text style={styles.power}>-</Text>
          </View>
        )}
      </View>
    </>
  );
};

Squad.propTypes = {
  setPage: PropTypes.func,
  type: PropTypes.string,
};

const styles = StyleSheet.create(squadStyles);
const global = StyleSheet.create(globalStyles);

export default Squad;
