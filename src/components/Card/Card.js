import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { actionLike } from "../../redux/action";

const Card = ({ title, icon, isLiked, id, data, setLike }) => {
  const like = () => {
    setLike(data, id, isLiked);
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
  setLike: (data, id, isLiked) => dispatch(actionLike(data, id, isLiked)),
});

export default connect(null, mapDispatchToProps)(Card);
