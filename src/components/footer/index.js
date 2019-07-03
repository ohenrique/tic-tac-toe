import React from "react";
import { Platform } from "react-native";
import { Alert, TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import { Creators as GameActions } from "../../store/ducks/game";
import { Player } from "../game/game";

const Footer = ({ state, dispatch }) => {
  const confirmAlert = () => {
    if (Platform.OS == "web" && confirm("Do you want to restart the game?")) {
      dispatch(GameActions.resetGame());
    } else {
      Alert.alert("Restart", "Do you want to restart the game?", [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => dispatch(resetGame()) }
      ]);
    }
  };

  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <View
          style={[
            styles.circle,
            state.player == Player.ONE ? styles.circleSelected : null
          ]}
        >
          <Text style={styles.footerText}>O</Text>
        </View>
        <View
          style={[
            styles.circle,
            state.player == Player.TWO ? styles.circleSelected : null
          ]}
        >
          <Text style={styles.footerText}>X</Text>
        </View>
      </View>
      <View style={[styles.footerContent, styles.footerCenter]}>
        <Text style={styles.footerText}>
          {state.score.player1} - {state.score.player2}
        </Text>
      </View>
      <TouchableOpacity style={styles.resetButton} onPress={confirmAlert}>
        <Text style={styles.footerText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

export default connect(state => ({ state: state.game }))(Footer);

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14bdac",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 20,
    flexDirection: "row"
  },
  footerText: {
    color: "white",
    fontSize: 22
  },
  footerContent: {
    flex: 1,
    flexDirection: "row"
  },
  footerCenter: {
    flexWrap: "wrap",
    justifyContent: "center"
  },
  circle: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#fff0"
  },
  circleSelected: {
    borderColor: "#ffff"
  },
  resetButton: {
    flex: 1,
    flexDirection: "row-reverse"
  }
});
