import * as React from "react";
import { View, StyleSheet, Text, ToastAndroid, Clipboard } from "react-native";
import Touchable from "react-native-platform-touchable";

export class SingleColorView extends React.Component {
  render() {
    return (
      <Touchable
        onPress={() => {
          if (Platform.OS === "android") {
            ToastAndroid.show(
              this.props.color + " copied to clipboard!",
              ToastAndroid.LONG
            );
          }
          Clipboard.setString(this.props.color);
        }}
        style={[styles.container, { backgroundColor: this.props.color }]}
      >
        <Text style={styles.colorText}>{this.props.color}</Text>
      </Touchable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    justifyContent: "center",
    alignItems: "center"
  },
  colorText: {
    fontWeight: "700",
    backgroundColor: "rgba(255, 255, 255, .3)",
    paddingLeft: 8,
    paddingRight: 8
  }
});
