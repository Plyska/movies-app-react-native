import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Avatar, Icon, ListItem } from "react-native-elements";
import { connect } from "react-redux";
import { actionLike } from "../../redux/action";

const Card = ({ title, icon, id, setFavorites, favorites }) => {
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

const mapDispatchToProps = (dispatch) => ({
  setFavorites: (data) => dispatch(actionLike(data)),
});

const mapStateToProps = (state) => {
  return {
    favorites: state.photos.favorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
