import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';
import ListOfRooms from './ListOfRooms'
import SelectRoomButton from './SelectRoomButton'; // Test page

import SplashStyle from './src/SplashStyle';

// External parts to the page

// Components
import { 
  View, 
  Text, 
  Navigator, 
  Button,
  TouchableHighlight,
  Alert,
  Image
} from 'react-native';

// First Page
export default class SplashMain extends Component {
  constructor() {
      super();
  }

  render() {
    return (
      <View style={SplashStyle.rootContainer}>
        <Image
            style={SplashStyle.backgroundImage}
            source={require('./pic/back.jpg')}>
          <View style={SplashStyle.titleContainer}>
              <Text style={SplashStyle.title}> {"Smart Room"} </Text>
          </View>
          <View style={SplashStyle.buttonContainer}>
                  <TouchableHighlight underlayColor={ 'rgba(255, 255, 255, 0.8)' } style={SplashStyle.button} onPress={()=>{this.seeRooms()}}>
                    <Text style={SplashStyle.buttonText}> {"See Available Rooms"} </Text>
                  </TouchableHighlight>
                  <TouchableHighlight underlayColor={ 'rgba(255, 255, 255, 0.8)' } style={[SplashStyle.button, SplashStyle.button2]} onPress={()=>{Alert.alert("Nothing yet!")}}>
                    <Text style={SplashStyle.buttonText}> {"About"} </Text>
                  </TouchableHighlight>
          </View>
        </Image>
      </View>
  );}

  seeRooms = () => {
    this.props.navigator.push({
     name: 'OtherHome',
     title: 'Go See other room',
    });
  }

}


module.exports = SplashMain;