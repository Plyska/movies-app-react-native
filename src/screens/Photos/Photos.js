import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import Card from "../../components/Card";
import { connect } from "react-redux";
import getDataFromApi from "../../service/getDataFromApi";
import { actionSaveAllPhotos } from "../../redux/action";

function Photos({ allPhotos, setAllPhotos }) {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const photos = await getDataFromApi();
    setAllPhotos(photos);
    setIsLoading(false);
    setFilterData(photos);
  };

  const search = (text) => {
    if (text) {
      const newData = allPhotos.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setInputValue(text);
    } else {
      setFilterData(allPhotos);
      setInputValue(text);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Input
          leftIcon={
            <Icon
              name="search-circle-outline"
              size={30}
              color="black"
              type="ionicon"
            />
          }
          value={inputValue}
          placeholder="Search a movie..."
          onChangeText={(text) => search(text)}
          onSubmitEditing={search}
        />
        <View>
          {isLoading ? (
            <View>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            filterData.map((photo) => {
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
            })
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

const mapDispatchToProps = (dispatch) => ({
  setAllPhotos: (data) => dispatch(actionSaveAllPhotos(data)),
});

const mapStateToProps = (state) => {
  return {
    allPhotos: state.photos.allPhotos,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Photos);
