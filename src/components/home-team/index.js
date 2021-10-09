import React, { useState } from "react";
import homeStyles from "./home-team.json";
import globalStyles from "../../../global.json";
import modalStyles from "../../../modal.json";
import { StyleSheet, View, Text, Modal, Pressable } from "react-native";
import PropTypes from "prop-types";
import Button from "../button";

const HomeTeam = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
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
            <View style={[modal.scoring, modal.totalPoints]}>
              <Text style={modal.label}>Total Points</Text>
              <Text style={modal.points}>1500</Text>
            </View>
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

const styles = StyleSheet.create(homeStyles);
const global = StyleSheet.create(globalStyles);
const modal = StyleSheet.create(modalStyles);

export default HomeTeam;
