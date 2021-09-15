import React, { useCallback } from "react";
import { TouchableOpacity } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { actionLike } from "../../redux/action";

const Card = ({ title, icon, id }) => {
  const favorites = useSelector((state) => state.photos.favorites);
  const dispatch = useDispatch();

  const setFavorites = useCallback(
    (data) => dispatch(actionLike(data)),
    [dispatch]
  );

  const like = () => {
    if (favorites.indexOf(id) > -1) {
      let newArr = [...favorites];
      const index = newArr.indexOf(id);
      newArr.splice(index, 1);
      setFavorites(newArr);
    } else {
      let newArr = [...favorites];
      newArr.push(id);
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
    >
      <Avatar source={{ uri: icon }} />
      <ListItem.Title style={{ width: "75%" }}>{title}</ListItem.Title>
      <TouchableOpacity onPress={() => like()}>
        {favorites.indexOf(id) > -1 ? (
          <Icon name="heart-outline" type="ionicon" />
        ) : (
          <Icon name="heart-dislike-outline" type="ionicon" />
        )}
      </TouchableOpacity>
    </ListItem>
  );
};

export default Card;
