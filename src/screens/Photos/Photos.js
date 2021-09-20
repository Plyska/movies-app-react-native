import React, { useEffect, useState, useCallback } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList } from "react-native";
import { Input, Icon } from "react-native-elements";
import Card from "../../components/Card";
import { useSelector, useDispatch } from "react-redux";
import getDataFromApi from "../../service/getDataFromApi";
import { actionSaveAllPhotos } from "../../redux/action";

function Photos() {
  const [inputValue, setInputValue] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [startIdex, setStartIdex] = useState(0);

  const allPhotos = useSelector((state) => state.photos.allPhotos);

  const dispatch = useDispatch();
  const setAllPhotos = useCallback(
    (data) => dispatch(actionSaveAllPhotos(data)),
    [dispatch]
  );

  useEffect(() => {
    fetchData(startIdex);
  }, [startIdex]);

  const fetchData = async (page) => {
    setIsLoading(true);
    //const photos = await getDataFromApi(page);
    // if (filterData.length) {
    //   if (
    //     filterData[filterData.length - 1].id === photos[photos.length - 1].id
    //   ) {
    //     setFilterData([...filterData]);
    //   } else {
    //     setFilterData([...filterData, ...photos]);
    //   }
    // } else {
    //   setFilterData([...filterData, ...photos]);
    // }
    if (page === filterData.length) {
      const photos = await getDataFromApi(page);
      setFilterData([...filterData, ...photos]);
      setAllPhotos([...filterData, ...photos]);
    }
    setIsLoading(false);
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

  const loadMorePhotosFromApi = (info) => {
    setStartIdex(startIdex + 20);
  };

  const renderPhotos = ({ item }) => (
    <Card
      photo={item}
    />
  );

  const renderLoader = () => {
    return (
      <View>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  };
  return (
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
      <FlatList
        style={{ flex: 1 }}
        data={filterData}
        renderItem={renderPhotos}
        ListFooterComponent={renderLoader}
        keyExtractor={(item) => item.id + item.title}
        onEndReached={loadMorePhotosFromApi}
        onEndReachedThreshold={0.2}
        removeClippedSubviews={true}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Photos;
