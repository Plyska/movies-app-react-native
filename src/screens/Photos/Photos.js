import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Card from "../../components/Card";
import { connect } from "react-redux";
import getDataFromApi from "../../service/getDataFromApi";

function Photos(props) {
  const { dataMovie } = props;
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  // console.log(dataMovie(), 'datamovie');
  useEffect(async () => {
    const d = await getDataFromApi();
    setData(d);
  }, []);

  // useEffect( async () => {
  //   // const q = await getDataFromApi()
  //   // setData(q);
  //   // fetch(API_URL)
  //   //   .then((res) => res.json())
  //   //   .then((res) => {
  //   //     setFilterData(res);
  //   //     setData(res);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });
  //   //setData(getDataFromApi());

  // }, []);

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

  const checkDataStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@favorite");
      const favoriteMovies = jsonValue != null ? JSON.parse(jsonValue) : null;

      if (favoriteMovies) {
        setData(favoriteMovies);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TextInput
          style={styles.search}
          value={inputValue}
          placeholder="Search a movie..."
          onChangeText={(text) => search(text)}
          onSubmitEditing={search}
        />
        <View>
          {data.map((item, i) => {
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
                  data={data}
                  setData={setData}
                />
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
});

const mapStateToProps = (state) => {
  return {
    dataMovie: state.movies,
  };
};

export default connect(mapStateToProps, null)(Photos);
