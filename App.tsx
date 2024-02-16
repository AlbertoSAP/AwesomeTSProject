import {SafeAreaView} from 'react-native';
// import PositionScreen from './src/screens/PositionScreen';
import React from 'react';
// import FlexScreen from './src/screens/FlexScreen';
import HomeWorkScreen from './src/screens/HomeWorkScreen';
// import BoxObjectModelScreen from './src/screens/BoxObjectModelScreen';
// import DimentionScreen from './src/screens/DimentionScreen';
// import CounterScreen from './src/screens/CounterScreen';
// import HolaMundoScreen from './src/screens/HolaMundoScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeWorkScreen/>
      {/* <FlexScreen/> */}
      {/* <PositionScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimentionScreen /> */}
    </SafeAreaView>
  );
};

export default App;
