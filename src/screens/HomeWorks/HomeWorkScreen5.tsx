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
        flexDirection:'row',
        justifyContent:'space-between'
    },
    purpleBox:{
        width:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'blue',
    },
    orangeBox:{
        width:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'orange',
    },
    blueBox:{
        width:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'skyblue',
    },
})