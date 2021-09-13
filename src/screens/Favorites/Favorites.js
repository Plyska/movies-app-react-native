import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../../components/Card";
import { connect } from "react-redux";

function Favorites({ dataMovie }) {
  const [favorite, setFavorite] = useState(dataMovie.photos);
  return (
    <View style={styles.container}>
      <View>
        {favorite.map((item) => {
          if (item.isLiked) {
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate("Details", {
                    title: item.title,
                    url: item.url,
                  })
                }
              >
                <Card
                  title={item.title}
                  icon={item.thumbnailUrl}
                  isLiked={item.isLiked}
                  id={item.id}
                  data={dataMovie.photos}
                  setData={setFavorite}
                />
              </TouchableOpacity>
            );
          } else {
            return null;
          }
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

const mapStateToProps = (state) => {
  return {
    dataMovie: state.movies,
  };
};

export default connect(mapStateToProps, null)(Favorites);
