import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity
} from 'react-native';

export enum BtnStyles {
  btnPrimary = '#007bff',
  btnSecondary = '#6c757d',
  btnSuccess = '#28a745',
  btnDanger = '#dc3545',
  btnWarning = '#ffc107',
  btnInfo = '#17a2b8',
}

export enum PositionButton {
  left = 'left',  
  right = 'rigth',
}

interface FloatingButtonProps { 
  onPressHandler: () => void;
  buttonStyle: BtnStyles;
  positionFloat: 'left' | 'rigth';
  text: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onPressHandler,
  buttonStyle,
  positionFloat,
  text,
}) => {
  let configPosition: ViewStyle = {
    position: 'absolute',
    bottom: 25,
  };

  const shadowHandler = () => {
    switch (buttonStyle) {
      case BtnStyles.btnPrimary:
        return '#007bff';
      case BtnStyles.btnSecondary:
        return '#6c757d';
      case BtnStyles.btnSuccess:
        return '#28a745';
      case BtnStyles.btnDanger:
        return '#610000';

      case BtnStyles.btnWarning:
        return '#ffc107';

      default:
        return '#009092';
    }
  };

  if (positionFloat === PositionButton.left) {
    configPosition = {...configPosition, left: 25};
  }
  if (positionFloat === PositionButton.right) {
    configPosition = {...configPosition, right: 25};
  }

  const android = () => {
    return (
      <View style={configPosition}>
        <TouchableNativeFeedback
          onPress={onPressHandler}
          background={TouchableNativeFeedback.Ripple(
            shadowHandler(),
            false,
            30,
          )}>
          <View style={{...styles.fab, backgroundColor: `${buttonStyle}`}}>
            <Text style={styles.fabText}>{text}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };
  const ios = () => {
    return (
      <TouchableOpacity 
      style={configPosition} 
      onPress={onPressHandler}
      activeOpacity={0.75}
      >
        <View style={{...styles.fab, backgroundColor: `${buttonStyle}`}}>
          <Text style={styles.fabText}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  switch (Platform.OS) {
    case 'ios':
      return ios();

    default:
      return android();
  }
};

export default FloatingButton;

const styles = StyleSheet.create({
  fab: {
    borderRadius: 100,
    justifyContent: 'center',
    height: 60,
    width: 60,
    // shadow
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  fabText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
