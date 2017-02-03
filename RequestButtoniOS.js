import React, { Component } from 'react'
import Style from './src/StyleiOS';
import {
   View,
   Text,
   Button,
   StyleSheet
} from 'react-native'

export default RequestButton = (props) => {
   return (
      <View style = {Style.buttonContainer}>
          <Button
            color= '#C3270B'
            title="Request To Change Room Temperature"
            accessibilityLabel="Request To Change Room Temperature"
            onPress = {props.requestChange}
          />
      </View>
   )
}