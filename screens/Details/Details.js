import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Details({ route }) {
  const { title, url } = route.params;
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Image
        style={styles.img}
        source={{
          uri: url,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  img: {
    width: 600,
    height: 600,
  },
});
