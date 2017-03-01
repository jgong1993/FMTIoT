import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';

// External parts to the page
import TesMainButton from './TesMain2'
import SelectRoomButton from './SelectRoomButton'
// Components
import { 
  View, 
  Text, 
  Navigator, 
  Picker,
  Button,
  Alert,
  TouchableHighlight
} from 'react-native';

// First Page
export default class TesMain extends Component {
  constructor() {
      super()
  }
  
  render() {
    return (
      <View style={TestStyle.rootContainer}>

        <View style={TestStyle.displayContainer}>
            <View style={TestStyle.subDisplay}>
                  <Text style={TestStyle.headerText}> Select Type </Text>
            </View>
        </View>

        <TesMainButton requestChange = {this.requestChangeToTest} />
        <SelectRoomButton requestChange = {this.requestChangeToMain} />
      </View>
  );}
 requestChangeToTest = () => {
      this.props.navigator.push({
       name: 'OtherHome',
       title: 'Rooms Available',
      });
  }
 requestChangeToMain = () => {
      this.props.navigator.push({
       name: 'Home',
       title: '',
      });
 }
}


module.exports = TesMain;