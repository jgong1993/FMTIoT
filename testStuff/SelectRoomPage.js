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
var navigator; 
// First Page
export default class SelectRoomPage extends Component {
  constructor(nav) {
      super();
      navigator = nav;
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
         dataSource: ds.cloneWithRows([
            ['De Pree', 'Small Conference Room'], ['Seaside', 'Medium Conference Room'], ['Cardiff', 'Medium Conference Room'],
            ['Swamis', 'Big Conference Room'], ['De Pree 2', 'Small Conference Room'], ['Seaside 2', 'Medium Conference Room'], ['Cardiff 2', 'Medium Conference Room'],
            ['Swamis 2', 'Big Conference Room']
         ])

      };
  }

  render() {
    return (
      <View style={TestStyle.rootContainer}>

        <View style={TestStyle.displayContainer2}>
                  <Text style={TestStyle.headerText}> Available Rooms</Text>
        </View>

        <View style={TestStyle.subDisplay2}>
            <ListOfRooms navigator={navigator} dataSource={this.state.dataSource} selectRoom = {this.selectedRoom}/>
        </View>

      </View>
  );}

  selectedRoom = (x) => {
      this.props.navigator.push({
       name: 'Request Change',
       title: 'Request',
       room: x[0] + ' Conference Room'
      });
  }

  getTodaysDate(){
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today = new Date();
    var date = weekday[today.getDay()]+' '+ month[(today.getMonth()+1)]+' '+today.getDate()+', ' + today.getYear();
    return date;
  }

}


module.exports = SelectRoomPage;