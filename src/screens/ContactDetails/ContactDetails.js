import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ContactDetails({ route }) {
  const { contact } = route.params;
  const { avatar, firstName, secondName, gender } = contact;
  return (
    <View>
      <View style={styles.box_img}>
        <Image style={styles.img} source={{ uri: avatar }} />
      </View>
      <View>
        <View style={styles.box_content}>
          <Text>First name: </Text>
          <Text>{firstName}</Text>
        </View>
        <View style={styles.box_content}>
          <Text>Second name: </Text>
          <Text>{secondName}</Text>
        </View>
        <View style={styles.box_content}>
          <Text>Gender </Text>
          <Text>{gender}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  img: {
    width: 300,
    height: 300,
  },
  box_img: {
    marginTop: 20,
    alignItems: "center",
  },
  box_content: {
    margin: 30,
    flexDirection: 'row'
  },
});
