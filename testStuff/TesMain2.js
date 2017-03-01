import React, { Component } from 'react'
import TestStyle from './src/TestStyle';
import {
   View,
   Text,
   Button,
   StyleSheet
} from 'react-native'

export default TesMainButton = (props) => {
   return (
      <View>
          <Button
            color= '#C3270B'
            title="Go to Test Page"
            accessibilityLabel="Go to Test Page"
            onPress = {props.requestChange}
          />
      </View>
   )
}