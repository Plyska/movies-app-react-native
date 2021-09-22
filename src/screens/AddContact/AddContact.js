import React, { useState, useCallback, useEffect } from "react";
import { View, Platform, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { actionAddContact } from "../../redux/action";
import { useDispatch } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { Constants } from "expo-constants";

export default function AddContact({ navigation }) {
  const [valuePicker, setValuePicker] = useState("male");
  const [firstNameValue, setFirstNameValue] = useState("");
  const [secondNameValue, setSecondNameValue] = useState("");
  const [image, setImage] = useState(" ");

  const loadImg = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("PERMISSON DENIED!");
      }
    }
  };
  useEffect(() => {
    loadImg();
  }, []);

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
      avatar: image,
    });
    navigation.goBack();
  };

  const chosePhoto = async () => {
    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    };
    let result = await ImagePicker.launchImageLibraryAsync(options);
    console.log(result, "result");
    if (!result.cancelled) {
      setImage(result.uri);
    }
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
      <View style={{ alignItems: "center", marginTop: 30 }}>
        {image && (
          <Image
            source={{ uri: image }}
            style={{ width: 70, height: 70, borderRadius: 50 }}
          />
        )}
      </View>
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
