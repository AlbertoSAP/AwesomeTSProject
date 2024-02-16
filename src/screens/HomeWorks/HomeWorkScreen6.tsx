import React from 'react'
import { StyleSheet, View } from 'react-native'

const HomeWorkScreen = () => {
  return (
    <View style={container} >
      <View style={purpleBox} />
      <View style={orangeBox} />
      <View style={blueBox} />
    </View>
  )
}

export default HomeWorkScreen


const {container,purpleBox,orangeBox,blueBox} = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#040630',
    },
    purpleBox:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'blue',
        flex:2
    },
    orangeBox:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'orange',
        flex:2
    },
    blueBox:{
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'skyblue',
        flex:4
    },
})