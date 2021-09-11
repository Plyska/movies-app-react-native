import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { actionLike } from "../../components/redux/action";

const Card = ({ title, icon, isLiked, id, data, setData, setLike }) => {
  
  // const setToStore = async (value) => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem("@favorite", jsonValue);
  //   } catch (e) {
  //     console.warn(e);
  //   }
  // };

  const like = () => {
    setLike(data, id);
    // setData(newArr);
    // setToStore(newArr);
    
  };

  return (
    <View style={styles.box}>
      <View>
        <Image
          style={styles.icon}
          source={{
            uri: icon,
          }}
        />
      </View>
      <View style={styles.title}>
        <Text>{title}</Text>
      </View>
      <TouchableOpacity onPress={() => like()}>
        {isLiked ? (
          <Icon name="heart-outline" type="ionicon" />
        ) : (
          <Icon name="heart-dislike-outline" type="ionicon" />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "#000",
    backgroundColor: "#f2fdff",
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    width: "80%",
  },
});

const mapDispatchToProps = (dispatch) => ({
  setLike: (data, id) => dispatch(actionLike(data, id)),
});

export default connect(null, mapDispatchToProps)(Card);
