import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';

// External parts to the page
import TesMainButton from './TesMain2'
import SelectRoomButton from './SelectRoomButton'
import ModalStyle from './src/ModalStyle';

var info = require('./info.json');

// Components
import { 
  View, 
  Text, 
  Navigator, 
  Picker,
  Button,
  Alert,
  TouchableHighlight,
  StatusBar,
  TextInput
} from 'react-native';

// First Page
export default class TesMain extends Component {
  constructor() {
      super()
      this.state = {
        text: '',
      }
  }
  
  render() {
    return (
      <View style={TestStyle.rootContainer}>
        <StatusBar hidden={true}/>
        <View style={TestStyle.testMainDisplayContainer}>
            <View style={TestStyle.testSubDisplayContainer}>
                  <Text style={TestStyle.testHeaderText}> Password: </Text>
                  <TextInput secureTextEntry = {true} 
                             style={{width: 100}}
                             onChangeText={(text) => this.setState({text})} 
                             value={this.state.text} />
                  <TouchableHighlight underlayColor={'transparent'} style={ModalStyle.button} 
                      onPress ={()=>{
                           this.requestChangeToTest();
                  }}>
                    <Text>{"Go"}</Text>
                  </TouchableHighlight>
            </View>
        </View>
      </View>
  );}

 requestChangeToTest = () => {
    if(this.state.text == info[0]["sec"]){
      this.props.navigator.push({
       name: 'Splash',
       title: 'Splash Main',
      });
    }
  }
 requestChangeToMain = () => {
      this.props.navigator.push({
       name: 'Home',
       title: '',
      });
 }
}


module.exports = TesMain;