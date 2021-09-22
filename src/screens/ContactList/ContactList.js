import React, { useState, useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";
import { FlatList } from "react-native-gesture-handler";
import ContactsCard from "../../components/ContactsCard/ContactsCard";
import data_contacts from "../../service/contacts";
import { useSelector } from "react-redux";
import { actionRemoveContact } from "../../redux/action";
import { useDispatch } from "react-redux";

export default function ContactList({ navigation }) {
  const allContacts = useSelector((state) => state.photos.allContacts);
  const dispatch = useDispatch();
  const removeContactFromRedux = useCallback(
    (data) => dispatch(actionRemoveContact(data)),
    [dispatch]
  );

  const removeContact = (id) => {
    const newArr = [...allContacts];
    const index = newArr.findIndex(item => item.id === id)
    newArr.splice(index, 1)
    removeContactFromRedux(newArr);
  };

  const renderAllContacts = ({ item }) => (
    <ContactsCard contact={item} removeContact={removeContact} />
  );

  return (
    <View>
      <FlatList
        data={allContacts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderAllContacts}
      />
    </View>
  );
}
