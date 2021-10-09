import React, { useState } from "react";
import awayStyles from "./away-team.json";
import globalStyles from "../../../global.json";
import modalStyles from "../../../modal.json";
import { StyleSheet, View, Text, Modal, Pressable, Share } from "react-native";
import PropTypes from "prop-types";
import Button from "../button";

const AwayTeam = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const shareEvent = async () => {
    try {
      const result = await Share.share({
        message: "Help me when my battle by voting for Goku",
      });
  
      if (result.action === Share.sharedAction) {}
  
      return false;
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.column}>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Goku</Text>
          <Text style={styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1500</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Arthur Boyle</Text>
          <Text style={styles.affinity}>
            <View style={[global.circle, global.fireAffinity]}></View>
          </Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Genos</Text>
          <Text style={styles.affinity}>
            <View style={[global.circle, global.fireAffinity]}></View>
          </Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={styles.duoSection}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Rock Lee</Text>
          <Text style={styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Tenten</Text>
          <Text style={styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1000</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Chad</Text>
          <Text style={styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1000</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Sasori</Text>
          <Text style={styles.affinity}>-</Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>1250</Text>
        </Pressable>
      </View>
      <View style={styles.section}>
        <View style={styles.headliner}>
          <Text style={styles.character}>Soul Society</Text>
          <Text style={styles.affinity}>
            <View style={[global.circle, global.arcaneAffinity]}></View>
          </Text>
        </View>
        <Pressable onPress={toggleModal} style={styles.power}>
          <Text style={styles.powerText}>-</Text>
        </Pressable>
      </View>
      <Modal animationType="slide" transparent={false} visible={isModalOpen}>
        <View style={modal.container}>
          <View style={modal.body}>
            <Text style={global.title}>Goku</Text>
            <View style={modal.scoring}>
              <Text style={modal.label}>Power Level</Text>
              <Text style={modal.points}>1500</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.label}>Power Boost</Text>
              <Text style={modal.points}>0</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.label}>Power Loss</Text>
              <Text style={modal.points}>0</Text>
            </View>
            <View style={modal.scoring}>
              <Text style={modal.label}>Voting</Text>
              <Text style={modal.points}>0</Text>
            </View>
            <View style={[modal.scoring, modal.totalPoints]}>
              <Text style={modal.label}>Total Points</Text>
              <Text style={modal.points}>1500</Text>
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

const styles = StyleSheet.create(awayStyles);
const global = StyleSheet.create(globalStyles);
const modal = StyleSheet.create(modalStyles);

export default AwayTeam;
