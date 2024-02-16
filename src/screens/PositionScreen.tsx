import React from 'react';
import {StyleSheet, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.boxPurple} />
        <View style={styles.boxOrange} />
        <View style={styles.boxGreen} />
    </View>
  );
};

export default PositionScreen;

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width:400,
    // height:400,
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor: 'skyblue',
  },
  boxPurple:{
    backgroundColor:'purple',
    width:100,
    height:100,
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
    top:0,
    right:0
  },
  boxOrange:{
      backgroundColor:'orange',
      width:100,
      height:100,
      borderWidth:10,
      borderColor:'white',
      position:'absolute',
    bottom:0,
    right:0,
  },
  boxGreen:{
    backgroundColor:'green',
    width:100,
    height:100,
    borderWidth:10,
    borderColor:'white',
    position:'absolute',
    bottom:0,
    left:0,
    // ...StyleSheet.absoluteFillObject // para estirar la caja 
    // seria igual a decir bottom,left,t op,righr = 0
}
});
