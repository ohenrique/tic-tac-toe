import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Header extends React.Component {
  render = () => (
      <View style={styles.header}>
        <Text style={styles.headerText}>
          {this.props.title}
        </Text>
      </View>
    );
  }
;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: "#14bdac",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5
  },
  headerText: {
    color: "white",
    fontSize: 20,
    padding: 25
  }
});
