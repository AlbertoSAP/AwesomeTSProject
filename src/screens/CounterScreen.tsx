import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import FloatingButton, { BtnStyles, PositionButton } from '../components/FloatingButton ';

const btnPrimary = '#007bff';
const btnSecondary = '#6c757d';
const btnSuccess = '#28a745';
const btnDanger = '#dc3545';
const btnWarning = '#ffc107';
const btnInfo = '#17a2b8';

const CounterScreen = () => {
  const [counter, setCounter] = useState<number>(10);

  const increaseHandler = () => {
    setCounter(counter + 1);
  };
  const decrementHandler = () => {
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contador: {counter} </Text>

      {/* <Button
      color={btnSuccess}
      title='+'
      onPress={increaseHandler}
      /> */}
      {/* <TouchableOpacity style={styles.fabPositionBL} onPress={increaseHandler}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
        </View>
      </TouchableOpacity> */}
      <FloatingButton
         onPressHandler={increaseHandler}
         buttonStyle={BtnStyles.btnSuccess}
         positionFloat={PositionButton.left}
         text='+'
      />
      <FloatingButton
         onPressHandler={decrementHandler}
         buttonStyle={BtnStyles.btnDanger}
         positionFloat={PositionButton.right}
         text='-'
      />
      {/* <Button color={btnDanger} title="-" onPress={decrementHandler} /> */}
      {/* <TouchableOpacity style={styles.fabPositionBR} onPress={decrementHandler}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    color: 'white',
    fontSize: 45,
    textAlign: 'center',
  },
  fab: {
    backgroundColor: '#5856d6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  // fabPositionBR: {
  //   position: 'absolute',
  //   bottom: 25,
  //   right: 25,
  // },
  // fabPositionBL: {
  //   position: 'absolute',
  //   bottom: 25,
  //   left: 25,
  // },
});
