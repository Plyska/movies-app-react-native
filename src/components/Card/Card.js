import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { actionLike } from "../../redux/action";

const Card = ({ photo }) => {
  const { title, thumbnailUrl, id, url } = photo;
  const navigation = useNavigation();
  const  favorites = useSelector((state) => state.photos.favorites);
  const dispatch = useDispatch();

  const setFavorites = useCallback(
    (data) => dispatch(actionLike(data)),
    [dispatch]
  );

  const like = () => {
    if (favorites.findIndex((photo) => photo.id === id) > -1) {
      let newArr = [...favorites];
      const index = newArr.findIndex((photo) => photo.id === id);
      newArr.splice(index, 1);
      setFavorites(newArr);
    } else {
      let newArr = [...favorites];
      newArr.push(photo);
      setFavorites(newArr);
    }
  };

  return (
    <ListItem
      bottomDivider
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onPress={() =>
        navigation.navigate("Details", {
          title: title,
          url: url,
        })
      }
    >
      <Avatar source={{ uri: thumbnailUrl }} />
      <ListItem.Title style={{ width: "75%" }}>{title}</ListItem.Title>
      <Icon
        name={
          favorites.findIndex((photo) => photo.id === id) > -1
            ? "heart-outline"
            : "heart-dislike-outline"
        }
        type="ionicon"
        onPress={() => like()}
      />
    </ListItem>
  );
};

export default Card;
