import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import Card from "../../components/Card";
import { connect } from "react-redux";
import getDataFromApi from "../../service/getDataFromApi";
import { actionSaveAllPhotos } from "../../redux/action";

function Photos(props) {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const d = await getDataFromApi();
    props.setAllPhotos(d);
    setData(d);
    setIsLoading(false);
    setFilterData(d);
  };

  const search = (text) => {
    if (text) {
      const newData = filterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);
      setInputValue(text);
    } else {
      setData(filterData);
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
              color="silver"
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
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            data.map((photo) => {
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
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  search: {
    fontSize: 20,
    fontWeight: "300",
    padding: 20,
    width: "90%",
    backgroundColor: "#8de8fc",
    color: "#7a7a7a",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 40,
  },
  loader: {
    justifyContent: "center",
    alignItems: "center"
  }
});

const mapDispatchToProps = (dispatch) => ({
  setAllPhotos: (data) => dispatch(actionSaveAllPhotos(data)),
});

export default connect(null, mapDispatchToProps)(Photos);
