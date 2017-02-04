import React, { Component } from 'react';

// Style Sheets
import StyleiOS from './src/StyleiOS';

// External parts to the page
import RequestButtoniOS from './RequestButtoniOS';
import SimplePicker from 'react-native-simple-picker';
// Components
import { 
  View, 
  Text, 
  Navigator, 
  PickerIOS,
  Button,
  AlertIOS
} from 'react-native';

const options = ['De Pree Coneference Room [S]', 'Seaside Conference Room [M]', 'Swamis Coneference Room [L]'];
const label = ['De Pree Coneference Room [S]', 'Seaside Conference Room [M]', 'Swamis Coneference Room [L]'];

// First Page
export default class MainPageiOS extends Component {
  state = {
    room: '[Choose a Room - Press Here]',

  };
  constructor() {
      super()
  }
  render() {
    return (
      <View style={StyleiOS.rootContainer}>

        <View style={StyleiOS.displayContainer}>
            <View style={StyleiOS.subDisplay}>
                  <Text style={StyleiOS.headerText}> FMT Consultants Temperature Thingy </Text>
            </View>
        </View>

        <View style={StyleiOS.tempContainer}>
          <Button
            title = {this.state.room}
            color = 'white'
            onPress = {()=> {
                  this.refs.picker.show();
            } }
          />
          <SimplePicker
              ref={'picker'}
              options={options}
              labels={label}
              itemStyle={{
                fontSize:25,
                fontWeight: 'bold'
              }}
              onSubmit={(option)=>{
                this.setState({
                  room: option,
                });
              }}
          />
          <View><Text style={StyleiOS.currentTemperatureHeaderText}>{"Current Temperature"}</Text></View>
          <View style={StyleiOS.insidetemperature}>
              {this.renderTemperature(0)}
          </View>
          <View><Text style={StyleiOS.outsideTemperatureHeaderText}>{"Outside Temperature"}</Text></View>
          <View style={StyleiOS.outsidetemperature}>
              {this.renderTemperature(1)}
          </View>

          
          <RequestButtoniOS requestChange = {this.requestChange} />
        </View>

      </View>
  );}
 
  requestChange = () => {
    if(this.state.room != '[Choosse a Room - Press Here]'){
      this.props.navigator.push({
       name: 'Request Change',
       title: 'Request',
       room: this.state.room
      });
    }else{
      AlertIOS.alert( 'Please Choose a Room', 'Nothing is chosen right now.' );
    }
  }
  
 // Need to place this function elsewhere
 renderTemperature(t) {
    var data = require('./test.json');
    let views = [];
    views.push(<View style={StyleiOS.temperatureRow} key={data[t]["_id"]} >
                  <Text style={StyleiOS.temperatureButtonText}>
                   {data[t]["tempF"] + "         " + data[t]["tempC"]}
                  </Text>
               </View>)
    return views;
 }
}

// <PickerIOS style={StyleiOS.pickerContiner}
//                   selectedValue={this.state.room}
//                   onValueChange={(room_var) => this.setState({room: room_var})}>
//              <PickerIOS.Item label="Choose a Room" value="none" />
//              <PickerIOS.Item label="De Pree Coneference Room [S]" value="De Pree Coneference Room [S]" />
//              <PickerIOS.Item label="Seaside Conference Room [M]" value="Seaside Conference Room [M]" />
//              <PickerIOS.Item label="Swamis Coneference Room [L]" value="Swamis Coneference Room [L]" />
//           </PickerIOS>

module.exports = MainPageiOS;