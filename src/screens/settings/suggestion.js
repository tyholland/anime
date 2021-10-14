import React, { useState } from "react";
import suggestStyles from "./settings.json";
import globalStyles from "../../../global.json";
import modalStyles from "../../../modal.json";
import { StyleSheet, View, Text, Platform, Modal } from "react-native";
import Button from "../../components/button";
import TextField from "../../components/text-field";
import PropTypes from "prop-types";
import RNPickerSelect from "react-native-picker-select";
import BackLink from "../../components/back-link";

const Suggestions = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [charCategory, setCharCategory] = useState(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <View
      style={[
        global.container,
        Platform.OS === "ios"
          ? global.iosHeaderBeginning
          : global.androidHeaderBeginning,
      ]}
    >
      <BackLink redirect={() => props.setPage("Settings")} />
      <Text style={global.title}>Suggest a New Character</Text>
      <TextField placeholder="Enter Character Name..." />
      <TextField placeholder="Enter Anime Series Character is from..." />
      <RNPickerSelect
        onValueChange={(value) => setCharCategory(value)}
        placeholder={{ label: "Select Character category", value: null }}
        value={charCategory}
        style={{
          ...styles,
          iconContainer: {
            top: 32,
            right: 12,
          },
        }}
        items={[
          { label: "Captain", value: "captain", key: "captain" },
          { label: "Brawler", value: "brawler", key: "brawler" },
          { label: "Support", value: "support", key: "support" },
          { label: "Villain", value: "villain", key: "villain" },
          { label: "Battlefield", value: "battlefield", key: "battlefield" },
        ]}
        Icon={() => {
          return <View style={styles.selectArrow} />;
        }}
      />
      <Button
        btnText="Suggest Character"
        btnTextColor="black"
        btnColor="orange"
        redirect={toggleModal}
      />
      <Modal animationType="slide" transparent={false} visible={isModalOpen}>
        <View style={modal.container}>
          <View style={modal.body}>
            <Text style={modal.contentText}>Thank You for your suggestion</Text>
          </View>
          <View style={modal.button}>
            <Button
              btnText="Close"
              btnTextColor="white"
              btnColor="red"
              redirect={() => props.setPage("Settings")}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

Suggestions.propTypes = {
  setPage: PropTypes.func,
};

const styles = StyleSheet.create(suggestStyles);
const global = StyleSheet.create(globalStyles);
const modal = StyleSheet.create(modalStyles);

export default Suggestions;
