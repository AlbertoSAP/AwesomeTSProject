import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/styleBoxObjectModel'

const {title,container} = styles

const BoxObjectModelScreen = () => {
  return (
    <View style={container} >
      <Text style={title}>
        Box Object Model 
      </Text>
    </View>
  )
}

export default BoxObjectModelScreen
