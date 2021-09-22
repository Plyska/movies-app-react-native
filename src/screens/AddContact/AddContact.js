import React, { useState, useCallback } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { actionAddContact } from "../../redux/action";
import { useDispatch } from "react-redux";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


export default function AddContact({ navigation }) {
  const [valuePicker, setValuePicker] = useState("male");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [secondNameValue, setSecondNameValue] = useState("");

  const dispatch = useDispatch();

  const saveContactToRedux = useCallback(
    (data) => dispatch(actionAddContact(data)),
    [dispatch]
  );

  const addContact = () => {
    saveContactToRedux({
      id: Math.random() * 1000,
      firstName: firstNameValue,
      secondName: secondNameValue,
      gender: valuePicker,
    });
    navigation.goBack();
  };

  const chosePhoto = () => {
    const options = {};
    launchImageLibrary(options, res => {
      console.log("res", res);
    })
  };

  return (
    <View>
      <Input
        value={firstNameValue}
        placeholder="First Name"
        onChangeText={(text) => setFirstNameValue(text)}
      />
      <Input
        value={secondNameValue}
        placeholder="First Name"
        onChangeText={(text) => setSecondNameValue(text)}
      />
      <Button
        title="Chose a photo"
        style={{ width: "90%", marginLeft: "5%" }}
        onPress={() => chosePhoto()}
      />
      <Picker
        selectedValue={valuePicker}
        onValueChange={(itemValue) => setValuePicker(itemValue)}
      >
        <Picker.Item label="MALE" value="male" />
        <Picker.Item label="FEMALE" value="female" />
      </Picker>
      <Button
        title="ADD NEW CONTACT"
        style={{ width: "90%", marginLeft: "5%" }}
        onPress={() => addContact()}
      />
    </View>
  );
}
