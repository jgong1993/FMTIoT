import React, { Component } from 'react';

// Style Sheets
import Style from './src/StyleiOS';
import NavigationStyle from './src/NavigationStyleiOS';

// External parts to the page
import MainPageiOS from './MainPageiOS'; // Main PAge
import RequestContaineriOS from './RequestContaineriOS'; // Request page

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
} from 'react-native';

export default class IotTemperature extends Component {
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
        <MainPageiOS
          navigator={navigator} />
      );
    }
    if (route.name == 'Request Change') {
      return (
        <RequestContaineriOS
          room = {route.room} 
          navigator={navigator} />
      );
    }
  }
}

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

AppRegistry.registerComponent('IotTemperature', () => IotTemperature);
