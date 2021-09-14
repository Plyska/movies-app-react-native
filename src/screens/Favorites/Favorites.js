import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Card from "../../components/Card";
import { connect } from "react-redux";

function Favorites({ favorites, allPhotos, navigation }) {
  const [favorite, setFavorite] = useState([]);
  //console.log(allPhotos);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {allPhotos.map((photo) => {
            if (favorites.indexOf(photo.id) > -1) {
              return (
                <TouchableOpacity
                  key={photo.id}
                  onPress={() =>
                    navigation.navigate("Details", {
                      title: photo.title,
                      url: photo.url,
                    })
                  }
                >
                  <Card
                    title={photo.title}
                    icon={photo.thumbnailUrl}
                    id={photo.id}
                  />
                </TouchableOpacity>
              );
            } else {
              return null;
            }
          })}
        </View>
      </View>
    </ScrollView>
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
    favorites: state.photos.favorites,
    allPhotos: state.photos.allPhotos,
  };
};

export default connect(mapStateToProps, null)(Favorites);
