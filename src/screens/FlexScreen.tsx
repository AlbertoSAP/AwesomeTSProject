import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FlexScreen = () => {
  return (
    <View style={conatiner} >
      <Text style={box1} >Box 1</Text>
      <Text style={box2} >Box 2</Text>
      <Text style={box3} >Box 3</Text>
    </View>
  )
}

export default FlexScreen

const {conatiner, box1,box2,box3} = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'skyblue',
        // flexDirection:'row',
        // justifyContent:'flex-end',
        // alignItems:'flex-end'
        // alignContent:'flex-end' 
        // alignItems:'flex-start' 
      //   alignItems:'center',
      //   flexWrap:'wrap',
      // justifyContent:'center'
    },
    box1:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'center',
    },
    box2:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
    },
    box3:{
        borderWidth:2,
        borderColor:'white',
        fontSize:30,
        // alignSelf:'flex-end'
    }
})
