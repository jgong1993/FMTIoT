import React, { Component } from 'react';

// Style Sheets
import Style from './src/Style';
import NavigationStyle from './src/NavigationStyle';

// External parts to the page
import MainPage from './MainPage'; // Main PAge
import RequestContainer from './RequestContainer'; // Request page

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
          initialRoute={{id: 'Home', name: 'Home'}}
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
    if (route.name == 'Home') {
      return (
        <MainPage
          navigator={navigator} />
      );
    }
    if (route.name == 'Request Change') {
      return (
        <RequestContainer
          room = {route.room} 
          navigator={navigator} />
      );
    }
  }
} // End of IoTTemperature

// Router to map navigation
var NavigationBarRouteMapper = {
   LeftButton(route, navigator, index, navState) {
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
    if(route.title == 'Request'){
      return (
         <Text style = { NavigationStyle.title2 }>
            {route.title + ': ' + route.room} 
         </Text> 
      )
    }else{
      return (
         <Text style = { NavigationStyle.title }>
            {route.title} 
         </Text>
      )
    }
   },
}

// Backbutton event listener
BackAndroid.addEventListener('hardwareBackPress', () => {
    if (navigator && navigator.getCurrentRoutes().length > 1) {
        navigator.pop();
        return true;
    }
    return false;
});

AppRegistry.registerComponent('IotTemperature', () => IotTemperature);