import React, { useState, useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import data_contacts from "../../service/contacts";
import { useSelector, useDispatch } from "react-redux";
import { actionSaveAllContacts } from "../../redux/action";

export default function ContactList({ navigation }) {
  const [contacts, setContacts] = useState(data_contacts);

  const dispatch = useDispatch();
  const setAllContacts = useCallback(
    (data) => dispatch(actionSaveAllContacts(data)),
    [dispatch]
  );

  useEffect(() => {
    setAllContacts(data_contacts)
  }, [])

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
      <Button
        icon={<Icon name="add-circle-outline" size={20} color="white" />}
        title="Add contact"
        onPress={() => navigation.navigate("Add")}
      />
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAllContacts}
      />
    </View>
  );
}
