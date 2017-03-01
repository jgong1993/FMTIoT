import React, { Component } from 'react'
import TestStyle from './src/TestStyle';
import {
   View,
   Text,
   Button,
   StyleSheet
} from 'react-native'

export default SelectRoomButton = (props) => {
   return (
      <View>
          <Button
            color= '#C3270B'
            title="Go to original"
            accessibilityLabel="Go to original"
            onPress = {props.requestChange}
          />
      </View>
   )
}