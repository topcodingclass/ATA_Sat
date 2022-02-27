import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'


const DATA = [
  {
    id: 1,
    title: "Leo the Lion",
    materials:
      "Plastic Plate, Yellow Lanyard, Beige Paint, White Pipe Cleaner",
      step: ["2-1.jpg", "2-2.jpg", "2-3.jpg"],
    src: require("./assets/1.png"),
  },
  {
    id: 2,
    title: "Sing Sing Microphone",
    materials:
      "Aluminum Foil, Origami, Tennis Ball, Used Toilet Paper Roll, Pipe Cleaner",
    step: ["2-1.jpg", "2-2.jpg", "2-3.jpg"],
    src: require("./assets/2.png"),
  },
  {
    id: 3,
    title: "Colorful Clouds",
    materials:
      "Brown Red Purple Blue Green Construction Paper, Cotton Balls, Yellow Lanyard",
    step: ["3-1.jpg", "3-2.jpg", "3-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 4,
    title: "Super Steamers",
    materials:
      "Used Tissue Roll, Two Gobbly Eyes, Red Steamer Paper, Green Steamer Paper, Two Green Cotton Balls, Red Orgami",
    step: ["4-1.jpg", "4-2.jpg", "4-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 5,
    title: "Happy flower",
    materials:
      "One Popsicle Stick, Yellow and Pink Lanyard, One Plastic Plate, Green Duck Tape",
    step: ["5-1.jpg", "5-2.jpg", "5-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 6,
    title: "Swim Swim Fishy",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["6-1.jpg", "6-2.jpg", "6-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 7,
    title: "Turkey Hanger",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["7-1.jpg", "7-2.jpg", "7-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 8,
    title: "In the Desert",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["8-1.jpg", "8-2.jpg", "8-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 9,
    title: "Happy Snowman",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["9-1.jpg", "9-2.jpg", "9-3.jpg"],
    src: require("./assets/3.png"),
  },
  {
    id: 10,
    title: "My Little Christman Tree",
    materials: "Aluminum Foil, Origami, Tennis Ball",
    step: ["10-1.jpg", "10-2.jpg", "10-3.jpg"],
    src: require("./assets/3.png"),
  },
];

const App = () => {
  const renderItem = ({item, index}) => (
    <View style={{borderWidth:1, borderColor:'gray', borderRadius:15, width:170, height:200, margin:20, justifyContent:'center', alignItems:'center'}}>
      <Image style={{width:140, height:160, borderRadius:15}} source= {item.src} />
      <Text>{item.title}</Text>
    </View>
  )
  return (
    <View>
      {/* Logo  */}
      <View style={{marginTop:20, paddingTop:30, paddingHorizontal:5}}>
      <Image
        style={{height:170, width:'100%'}}
        source={require('./assets/ATALogo.png')}
      />
      </View>
      {/* List */}
      <View style={{alignItems:'center'}}>
        <FlatList data = {DATA} renderItem={renderItem} numColumns={2} />
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})