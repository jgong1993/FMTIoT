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

        <View style={TestStyle.testMainDisplayContainer}>
            <View style={TestStyle.testSubDisplayContainer}>
                  <Text style={TestStyle.testHeaderText}> FAKE LOGIN PAGE. </Text>
                  <Text style={TestStyle.testHeaderText}> Please Select Type Below</Text>
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