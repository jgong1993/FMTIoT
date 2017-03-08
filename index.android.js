import React, { Component } from 'react';

// Style Sheets
import Style from './src/Style';
import NavigationStyle from './src/NavigationStyle';
import TestStyle from './testStuff/src/TestStyle';

// External parts to the page
import MainPage from './MainPage'; // Main PAge
import RequestContainer from './RequestContainer'; // Request page


import TesMain from './testStuff/TesMain'; // Test page
import SelectRoomPage from './testStuff/SelectRoomPage'; // Test page
import RoomInformation from './testStuff/RoomInformation'; // Test page
import SplashMain from './testStuff/SplashMain';
// Componenets
import {
  AppRegistry,
  StyleSheet,
  Text,
  Picker,
  Button,
  Navigator,
  Alert,
  TouchableOpacity,
  View,
  BackAndroid
} from 'react-native';

var navigator; 

// Main class
class IotTemperature extends Component {
  render() {
    return (
      <Navigator
          initialRoute={{id: 'Test', name: 'Test'}}
          renderScene={this.renderScene}
          ref={(nav) => { navigator = nav; }}
          navigationBar = {
               <Navigator.NavigationBar
                  navigationStyles={Navigator.NavigationBar.StylesIOS}
                  routeMapper = { NavigationBarRouteMapper } />
            }/>
    );
  }
  renderScene(route, navigator) { 
    if (route.name == 'Splash') {
      return (
        <SplashMain
          navigator={navigator} />
      );
    }

    if (route.name == 'Test') {
      return (
        <TesMain
          navigator={navigator} />
      );
    }

    if (route.name == 'Home') {
      return (
        <MainPage
          navigator={navigator} />
      );
    }
    if (route.name == 'Request Change' || route.name == 'Change Room Temperature') {
      return (
        <RequestContainer
          room = {route.room} 
          navigator={navigator} />
      );
    }

    if (route.name == 'OtherHome') {
      return (
        <SelectRoomPage
          navigator={navigator} />
      );
    }

    if(route.name =='Room Information'){
      return (
        <RoomInformation
          room = {route.room}
          size = {route.size} 
          roomImage = {route.roomImage}
          navigator={navigator} />
      );
    }
  }
} // End of IoTTemperature

// Backbutton event listener
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

// Router to map navigation
var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
    // if(route.name =='Room Information' && index > 0){
    //   return (
    //         <View style={TestStyle.roomInformationLeft}>
    //           <TouchableOpacity
    //              onPress = {() => { if (index > 0) { navigator.pop() } }}>
    //              <Text style={TestStyle.roomInformationDateTopLeft}>
    //                 {'Back'} 
    //              </Text>
    //           </TouchableOpacity>
    //         </View>
    //      )
    // }
      // if(index > 0) {
      //    return (
      //       <View style={RequestStyle.LeftButtonBox}>
      //       <TouchableOpacity
      //          onPress = {() => { if (index > 0) { navigator.pop() } }}>
      //          <Text style={ RequestStyle.leftButton }>
      //             {'Back'} 
      //          </Text>
      //       </TouchableOpacity>
      //       </View>
      //    )
      // }
      // else { return null }
   },
   RightButton(route, navigator, index, navState) {
    
   },
   Title(route, navigator, index, navState) {
    // if(route.title == 'Request'){
    //   return (
    //      <Text style = { NavigationStyle.title2 }>
    //         {route.title + ': ' + route.room} 
    //      </Text> 
    //   )
    // }else{
    //   if(route.title != "Rooms Available"){
    //     return (
    //        <Text style = { NavigationStyle.title }>
    //           {route.title} 
    //        </Text>
    //     )
    //   }
    // }
   },
}


AppRegistry.registerComponent('IotTemperature', () => IotTemperature);