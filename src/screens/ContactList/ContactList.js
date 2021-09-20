import React, { useState } from "react";
import { Text, View } from "react-native";
import { ListItem } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import data from "../../service/contacts";

export default function ContactList() {
  const [contacts, setContacts] = useState(data);

  const renderAllContacts = ({ item }) => (
    <ContactsCard
      contact={item}
      contacts={contacts}
      setContacts={setContacts}
      id={item.id}
      firstName={item.first_name}
      secondName={item.second_name}
      gender={item.gender}
    />
  );

  return (
    <View>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAllContacts}
      />
    </View>
  );
}
