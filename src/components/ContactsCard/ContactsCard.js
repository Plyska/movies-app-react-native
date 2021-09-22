import React from "react";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";


export default function ContactsCard({ contact, removeContact }) {
  const { firstName, secondName, gender, id, avatar } = contact;
  const navigation = useNavigation();
  const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return date + "-" + month + "-" + year;
  };

  return (
    <ListItem
      bottomDivider
      onPress={() => navigation.navigate("Contact Details")}
    >
      <Avatar
        title={firstName[0] + secondName[0]}
        source={{ uri: avatar }}
        rounded
        size="small"
      />
      <ListItem.Title>
        {firstName} {secondName}
      </ListItem.Title>
      <ListItem.Content>
        <ListItem.Subtitle>{gender}</ListItem.Subtitle>
        <ListItem.Subtitle>{getCurrentDate()}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon
        name="trash-outline"
        type="ionicon"
        onPress={() => removeContact(id)}
      />
    </ListItem>
  );
}
