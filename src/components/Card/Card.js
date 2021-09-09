import React, { useRef, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { actionLike } from "../../components/redux/action";


const Card = ({ title, icon, isLiked, id, data, setData, dataMovie }) => {
//  console.log(dataMovie, 'dataMovie');
  const setToStore = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorite", jsonValue);
    } catch (e) {
      console.warn(e);
    }
  };

  const like = () => {
  //    console.log(id);

    //    const favoriteMovies = [];
    const newArr = [...data];
    newArr.forEach((item) => {
      if (item.id === id) {
        item.isLiked = !isLiked;
      }
    });
    //    console.log(newArr);
    setData(newArr);

    // newArr.forEach((item) => {
    //   if (item.isLiked) {
    //     favoriteMovies.push(item);
    //   }
    // });

    //    console.log(favoriteMovies.length);

    setToStore(newArr);
//    console.log(actionLike(data), "actionLike");
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
}

const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
    marginBottom:10,
    borderWidth: 0.5,
    borderColor: "#000",
    backgroundColor: "#f2fdff"
   
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    width: "80%"
  }
});

const mapDispatchToProps = {
  actionLike
}


export default connect(null, mapDispatchToProps)(Card);