import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';
import ListOfRooms from './ListOfRooms'
import SelectRoomButton from './SelectRoomButton'; // Test page

// External parts to the page

// Components
import { 
  View, 
  Text, 
  Navigator, 
  Picker,
  Button,
  Alert,
  TouchableOpacity,
  ListView
} from 'react-native';
// First Page
export default class SelectRoomPage extends Component {
  constructor() {
      super();
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
         dataSource: ds.cloneWithRows([
            ['De Pree', 'Small Conference Room', 78], ['Seaside', 'Medium Conference Room', 72], ['Cardiff', 'Medium Conference Room', 74],
            ['Swamis', 'Big Conference Room', 99], ['De Pree 2', 'Small Conference Room', 78], ['Seaside 2', 'Medium Conference Room', 72], 
            ['Cardiff 2', 'Medium Conference Room', 74], ['Swamis 2', 'Big Conference Room', 77]
         ])

      };
  }

  render() {
    return (
      <View style={TestStyle.rootContainer}>

        <View style={TestStyle.selectRoomDisplayContainer}>
                  <Text style={TestStyle.selectRoomheaderText}> Available Rooms</Text>
        </View>

        <View style={TestStyle.selectRoomSubDisplay}>
            <ListOfRooms navigator={navigator} dataSource={this.state.dataSource} selectRoom = {this.selectedRoom}/>
        </View>

      </View>
  );}

  selectedRoom = (x) => {
      this.props.navigator.push({
       name: 'Room Information',
       title: 'RoomInformation',
       room: x[0],
       size: x[1]
      });
  }
}


module.exports = SelectRoomPage;