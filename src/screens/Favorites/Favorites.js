import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

function Favorites({ navigation }) {
  const allPhotos = useSelector((state) => state.photos.allPhotos);
  const favorites = useSelector((state) => state.photos.favorites);
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

export default Favorites;
