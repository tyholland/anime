import React from "react";
import buttonStyles from "./button.json";
import { StyleSheet, View, Pressable, Text } from "react-native";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <View style={props.viewStyle ? props.viewStyle : styles.submit}>
      <Pressable
        style={[
          styles.btn,
          styles[`${props.btnColor}Btn`],
          props.customBtnColor ? props.customBtnColor : null,
        ]}
        onPress={() => {
          props.redirect();

          if (props.setHeader) {
            props.setHeader(props.header);
          }
        }}
      >
        <Text
          style={[
            styles.btnText,
            styles[`${props.btnTextColor}Text`],
            props.customBtnTextColor ? props.customBtnTextColor : null,
          ]}
        >
          {props.btnText}
        </Text>
      </Pressable>
    </View>
  );
};

Button.propTypes = {
  btnText: PropTypes.string,
  btnTextColor: PropTypes.string,
  btnColor: PropTypes.string,
  customBtnColor: PropTypes.object,
  customBtnTextColor: PropTypes.object,
  viewStyle: PropTypes.object,
  redirect: PropTypes.func,
  setHeader: PropTypes.func,
  header: PropTypes.bool,
};

const styles = StyleSheet.create(buttonStyles);

export default Button;
