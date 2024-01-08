import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  ViewStyle,
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

  if (positionFloat === PositionButton.left) {
    configPosition = {...configPosition, left: 25};
  }
  if (positionFloat === PositionButton.right) {
    configPosition = {...configPosition, right: 25};
  }

  return (
    <TouchableOpacity style={configPosition} onPress={onPressHandler}>
      <View style={{...styles.fab, backgroundColor: `${buttonStyle}`}}>
        <Text style={styles.fabText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
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
    shadowOpacity: 0.30,
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
