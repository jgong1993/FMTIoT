import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';


// Components
import { 
  View, 
  Text, 
  Navigator, 
  Picker,
  Button,
  Alert,
  TouchableHighlight,
  TextInput,
  Dimensions
} from 'react-native';

var input = require('../input.json');

// First Page
export default class PassScreen extends Component {
  constructor() {
      super(),
      this.state = {
          text : ''
      }
  }
  
  render() {
    return (
      <View style={TestStyle.rootContainer}>
        <View style={TestStyle.testMainDisplayContainer}>
            <View style={TestStyle.testSubDisplayContainer}>
                  <TextInput value={this.state.text}  
                             onFocus= {() => this.setState({text : ''})}
                             onChangeText={(text) => this.setState({text})}
                             style = {{textAlign: 'center', alignItems: 'center', width: (Dimensions.get("window").width)/2, height: 50}}
                             editable = {true}
                             secureTextEntry = {true}
                             placeholder = {"Enter password here"}
                             />
                  <Button
                    title = {"Go"}
                    accessibilityLabel="Go"
                    onPress = {() => {this.requestChangeToTest()}}/>
            </View>
        </View>
      </View>
  );}

 requestChangeToTest = () => {
    if(input[0]["input"] == this.state.text){
      this.props.navigator.push({
       name: 'Splash',
       title: 'Splash Main',
      });
    }else{
      alert("Wrong password");
    }
  }
}


module.exports = PassScreen;