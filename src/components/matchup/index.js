import React, { useState } from 'react';
import matchStyles from './matchup.json';
import globalStyles from '../../../global.json';
import modalStyles from '../../../modal.json';
import { StyleSheet, View, Text, Modal, Pressable, Share } from 'react-native';
import PropTypes from 'prop-types';
import Button from '../button';

const MatchUp = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const shareEvent = async () => {
    try {
      const result = await Share.share({
        message: 'Help me when my battle by voting for Goku',
      });
  
      if (result.action === Share.sharedAction) {}
  
      return false;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.column}>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Goku</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1500</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Arthur</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>
            <View style={[global.circle, global.fireAffinity]}></View>
          </Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Genos</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>
            <View style={[global.circle, global.fireAffinity]}></View>
          </Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseDuoSection : styles.duoSection}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Lee</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Tenten</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1000</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Chad</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1000</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Sasori</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={props.isReverse ? styles.reverseSection : styles.section}>
        <View style={styles.headliner}>
          <Text style={props.isReverse ? styles.reverseCharacter : styles.character}>Soul Society</Text>
          <Text style={props.isReverse ? styles.reverseAffinity : styles.affinity}>
            <View style={[global.circle, global.arcaneAffinity]}></View>
          </Text>
        </View>
        <Pressable onPress={toggleModal} style={props.isReverse ? styles.reversePower : styles.power}>
          <Text style={props.isReverse ? styles.reversePowerText : styles.powerText}>-</Text>
        </Pressable>
      </View>
      <Modal animationType="slide" transparent={false} visible={isModalOpen}>
        <View style={modal.container}>
          <View style={modal.stats}>
            <Text style={global.title}>Goku</Text>
            <View style={modal.scoring}>
              <Text style={modal.label}>Power Level</Text>
              <Text style={modal.points}>1500</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.label}>Power Boost</Text>
              <Text style={modal.points}>300</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.specificLabel}>Weekly Affinity</Text>
              <Text style={modal.specificPoints}>100</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.specificLabel}>Support</Text>
              <Text style={modal.specificPoints}>100</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.specificLabel}>Battlefield</Text>
              <Text style={modal.specificPoints}>100</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.label}>Power Loss</Text>
              <Text style={modal.points}>- 100</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.specificLabel}>Weekly Affinity</Text>
              <Text style={modal.specificPoints}>50</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.specificLabel}>Villain</Text>
              <Text style={modal.specificPoints}>50</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.specificLabel}>Battlefield</Text>
              <Text style={modal.specificPoints}>0</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.label}>Voting</Text>
              <Text style={modal.points}>0</Text>
            </View>
            <View style={[modal.scoring, modal.totalPoints]}>
              <Text style={modal.label}>Total Points</Text>
              <Text style={modal.points}>1700</Text>
            </View>
          </View>
          <View style={modal.button}>
            <Button
              btnText="Get Votes"
              btnTextColor="black"
              btnColor="orange"
              redirect={shareEvent}
            />
          </View>
          <View style={modal.button}>
            <Button
              btnText="Close"
              btnTextColor="white"
              btnColor="red"
              redirect={() => setIsModalOpen(!isModalOpen)}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

MatchUp.propTypes = {
  setPage: PropTypes.func,
  isReverse: PropTypes.bool
};

const styles = StyleSheet.create(matchStyles);
const global = StyleSheet.create(globalStyles);
const modal = StyleSheet.create(modalStyles);

export default MatchUp;