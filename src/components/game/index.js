import React from "react";
import { connect } from "react-redux";
import GameBoard from "./game-board";
import GameMessage from "./game-message";

const Game = ({ state }) => (state.message ? <GameMessage /> : <GameBoard />);

const mapStateToProps = state => ({ state: state.game });

export default connect(mapStateToProps)(Game);
