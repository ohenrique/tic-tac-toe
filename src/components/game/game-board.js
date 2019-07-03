import React from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as GameActions } from "../../store/ducks/game";
import GameButton from "./game-button";

const GameBoard = ({ state, play }) => (
  <View style={styles.game}>
    {state.board.map((column, index) => (
      <View key={index}>
        {column.map(item => (
          <GameButton
            key={item.id}
            player={item.player}
            onPress={() => play(state.board, item)}
          />
        ))}
      </View>
    ))}
  </View>
);

const mapStateToProps = state => ({ state: state.game });

const mapDispatchToProps = dispatch =>
  bindActionCreators(GameActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameBoard);

const styles = StyleSheet.create({
  game: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  }
});
