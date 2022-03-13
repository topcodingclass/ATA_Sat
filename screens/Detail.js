import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from "@expo-google-fonts/roboto";


const Detail = ({ route,navigation }) => {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  const { item } = route.params;
  navigation.setOptions({title:item.title})

  const renderItem = ({item, index}) =>(
      <Image source={item.img} />
  )
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <View style={{backgroundColor:'white'}}>
      {/* Materials */}
      <View style={{margin:15, marginBottom:30}}>
        <Text style={{fontFamily:'Roboto_700Bold', fontSize:20}}>Materials:</Text>
        <Text style={{fontFamily:'Roboto_500Medium'}}>{item.materials}</Text>
      </View>
      {/* Steps */}
      <FlatList data={item.step} renderItem={renderItem} horizontal showsHorizontalScrollIndicator = {false} keyExtractor={(item) => item.img}/>
      {/* Youtube */}
      <View style={{alignItems:'center', marginTop:40}}>
      <YoutubePlayer
            style={{alignItems:'center', margin:20}}
            height={500}
            width={400}
            videoId="Hi_FliarjTk"
          />
          </View>
    </View>
  );
  }
};

export default Detail;

const styles = StyleSheet.create({});
