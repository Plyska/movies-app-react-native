import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/core";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { actionLike } from "../../redux/action";

const Card = ({ photo }) => {
  const { title, thumbnailUrl, id, url } = photo;
  const [iconName, setIconName] = useState("heart-dislike-outline");
  const navigation = useNavigation();
  const { allPhotos, favorites } = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const setFavorites = useCallback(
    (data) => dispatch(actionLike(data)),
    [dispatch]
  );

  const like = () => {
 //   console.log(allPhotos);
    if (favorites.indexOf(photo) > -1) {
      let newArr = [...favorites];
      const index = newArr.indexOf(photo);
      setIconName("heart-dislike-outline");
      newArr.splice(index, 1);
      setFavorites(newArr);
    } else {
      setIconName("heart-outline");
      let newArr = [...favorites];
      newArr.push(photo);
      setFavorites(newArr);
    }
  };

  // const getIconName = () => {
  //   allPhotos.forEach((photo) => {
  //     favorites.forEach((favorite_photo) => {
  //       if (photo.id === favorite_photo.id) {
  //         console.log(photo.id, "photo id");
  //         return "heart-outline";
  //       } else {
  //         return "heart-dislike-outline";
  //       }
  //     });
  //   });
  //   return "heart-dislike-outline";
  // };

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
      <ListItem.Title style={{ width: "75%" }}>
        {id}
        {title}
      </ListItem.Title>

      <Icon name={iconName} type="ionicon" onPress={() => like()} />
    </ListItem>
  );
};

export default Card;
