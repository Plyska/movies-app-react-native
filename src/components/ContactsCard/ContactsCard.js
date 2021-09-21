import React from "react";
import { Avatar, Icon, ListItem } from "react-native-elements";
export default function ContactsCard({
  firstName,
  secondName,
  gender,
  id,
  contacts,
  setContacts,
  contact,
}) {
  const removeContact = () => {
    const newArr = [...contacts];
    const index = newArr.findIndex((item) => item.id === contact.id);
    newArr.splice(index, 1);
    setContacts(newArr);
  };
  return (
    <ListItem bottomDivider>
      <Avatar title={firstName[0]} />
      <ListItem.Title>
        {firstName} {secondName}
      </ListItem.Title>
      <ListItem.Content>
        <ListItem.Title>{gender}</ListItem.Title>
        <ListItem.Subtitle> {"08.08.1998"}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon
        name="trash-outline"
        type="ionicon"
        onPress={() => removeContact()}
      />
    </ListItem>
  );
}
