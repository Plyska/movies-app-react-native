import React from "react";
import { StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import Card from "../../components/Card";
import { useSelector } from "react-redux";

function Favorites({ navigation }) {
  const { allPhotos, favorites } = useSelector((state) => state.photos);
//  console.log(favorites, "favor");
  // const favorites = useSelector((state) => state.photos.favorites);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          {favorites.map((photo) => {
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
                <Card photo={photo} />
              </TouchableOpacity>
            );
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
