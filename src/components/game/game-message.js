import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as GameActions } from "../../store/ducks/game";

const GameMessage = ({ state, restartGame }) => (
  <View style={styles.gameMessage}>
    <Text style={styles.messageText}>{state.message}</Text>
    <TouchableOpacity style={styles.button} onPress={() => restartGame()}>
      <Text style={styles.buttonText}> Continue </Text>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = state => ({ state: state.game });

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameMessage);

const styles = StyleSheet.create({
  gameMessage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  messageText: {
    color: "rgb(84, 84, 84)",
    fontSize: 22
  },
  button: {
    backgroundColor: "rgb(84, 84, 84)",
    borderWidth: 20,
    padding: 10,
    borderColor: "white"
  },
  buttonText: { color: "white", fontSize: 18 }
});
