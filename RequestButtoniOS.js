import React, { Component } from 'react'
import StyleiOS from './src/StyleiOS';

import {
   View,
   Text,
   Button,
   StyleSheet,
   TouchableHighlight,
} from 'react-native'

export default RequestButton = (props) => {
   return (
      <View style = {StyleiOS.buttonContainer1}>
          <TouchableHighlight activeOpacity={2}onPress={props.requestChange}> 
            <Text style={StyleiOS.requestButton}>{'Request To Change Room Temperature'}</Text> 
          </TouchableHighlight>
          
      </View>
   )
}
