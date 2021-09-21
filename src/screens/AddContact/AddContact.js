import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { useSelector } from "react-redux";

export default function AddContact() {
  const [valuePicker, setValuePicker] = useState("");
  const allContacts = useSelector((state) => state.photos.allContacts);

  console.log(allContacts, "ALL CONTACTS");
  return (
    <View>
      <Input placeholder="First Name" />
      <Input placeholder="Second Name" />

      <Picker
        selectedValue={valuePicker}
        onValueChange={(itemValue) => setValuePicker(itemValue)}
      >
        <Picker.Item label="MALE" value="male" />
        <Picker.Item label="FEMALE" value="female" />
      </Picker>
    </View>
  );
}
