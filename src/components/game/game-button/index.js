import React from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Player } from "../game";

export default class GameButton extends React.Component {

  render() {
    return (
      <TouchableOpacity
        style={this.props.player !== null ? styles.buttonPressed : styles.buttonDefault}
        onPress={this.props.onPress}
        disabled={this.props.player !== null}
      >
        <Text style={styles.buttonText}>{this.props.player == null ? "" : this.props.player == Player.ONE ? "o" : "x"}</Text>
      </TouchableOpacity>
    );
  }
}

const buttonDimension = Dimensions.get("window").height * 0.1;

const styles = StyleSheet.create({
  buttonDefault: {
    backgroundColor: "rgb(84, 84, 84)",
    borderWidth: 10,
    borderColor: "white",
    width: buttonDimension,
    height: buttonDimension,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonPressed: {
    backgroundColor: "#14bdac",
    borderWidth: 10,
    borderColor: "white",
    width: buttonDimension,
    height: buttonDimension,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "white",
    lineHeight: buttonDimension * 0.5,
    fontSize: buttonDimension * 0.5
  }
});
