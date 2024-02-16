import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

// const {width,height} = Dimensions.get('window')


const DimentionScreen = () => {

    const {width,height} = useWindowDimensions()

    return (
    <View style={styles.contarniner} >
      <View style={{
        ...styles.boxPurple,
        width:width * 2
        }} />
      <View style={styles.boxOrange} />
      <Text>W:{width} </Text>
      <Text>H:{height} </Text>
    </View>
  )
}

export default DimentionScreen

const styles = StyleSheet.create({
    contarniner:{
        width:'100%',
        height:300,
        backgroundColor:'red'
    },
boxPurple:{
    backgroundColor:'purple',
    width:'50%',
    height:'50%'

},
boxOrange:{
    backgroundColor:'orange',
    width:'50%',
    height:'50%'

},
})
