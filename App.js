import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'

const DATA = [
  {
    id:1,
    title:'Leo the Lion',
    materials: 'plastic plate, yellow lanyard,beige paint, white pipe cleaner',
    src: require('./assets/1.png')
  },
  {
    id:2,
    title: 'Sing Sing Microphone',
    materials: 'Aluminum Foil, Origami, Tennis Ball (any type of circular ball shape), used toilet paper roll, pipe cleaner',
    src: require('./assets/2.png')
  }
]

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