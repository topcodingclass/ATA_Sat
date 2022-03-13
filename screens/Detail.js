import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";

const Detail = ({ route,navigation }) => {
  const { item } = route.params;
  navigation.setOptions({title:item.title})

  const renderItem = ({item, index}) =>(
      <Image source={item.img} />
  )
  return (
    <View>
      <Text>Materials: {item.materials}</Text>
      <FlatList data={item.step} renderItem={renderItem} horizontal/>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({});
