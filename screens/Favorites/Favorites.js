import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../../components/Card";

export default function Favorites() {
  const [favorite, setFavorite] = useState([]);

  const getFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favorite");
      setFavorite(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (e) {
      console.warn(e);
    }
  };

  getFromStorage();

  
 

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
                  data={favorite}
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
