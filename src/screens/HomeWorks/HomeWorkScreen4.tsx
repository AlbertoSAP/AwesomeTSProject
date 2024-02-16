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
        justifyContent:'space-between'
    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'blue',
        alignSelf:'flex-end',
    },
    orangeBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'orange',
        alignSelf:'center'
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor:'white',
        backgroundColor:'skyblue',
        alignSelf:'flex-start'
    },
})