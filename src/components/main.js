import React from "react";
import { StyleSheet, View } from "react-native";

import Header from "./header";
import Game from "./game";
import Footer from "./footer";

export default class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Tic-Tac-Toe Gympass ᕦ( ͠° ͟ʖ ͠°)ᕤ" />
        <Game />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
