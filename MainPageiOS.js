import React, { Component } from 'react';

// Style Sheets
import Style from './src/StyleiOS';

// External parts to the page
import RequestButton from './RequestButton'

// Components
import { 
  View, 
  Text, 
  Navigator, 
  Picker,
  Button,
  Alert
} from 'react-native';

// First Page
export default class MainPageiOS extends Component {
  state = {
    room: 'Choose a Room',
  };
  constructor() {
      super()
  }
  render() {
    return (
      <View style={Style.rootContainer}>

        <View style={Style.displayContainer}>
            <View style={Style.subDisplay}>
                  <Text style={Style.headerText}> FMT Consultants Temperature Thingy </Text>
            </View>
        </View>

        <View style={Style.tempContainer}>
          <Picker style={Style.pickerContiner}
                  selectedValue={this.state.room}
                  onValueChange={(room_var) => this.setState({room: room_var})}>
             <Picker.Item label="Choose a Room" value="none" />
             <Picker.Item label="De Pree Coneference Room [S]" value="De Pree Coneference Room [S]" />
             <Picker.Item label="Seaside Conference Room [M]" value="Seaside Conference Room [M]" />
             <Picker.Item label="Swamis Coneference Room [L]" value="Swamis Coneference Room [L]" />
          </Picker>
          <View><Text style={Style.currentTemperatureHeaderText}>{"Current Temperature"}</Text></View>
          <View style={Style.insidetemperature}>
              {this.renderTemperature(0)}
          </View>
          <View><Text style={Style.outsideTemperatureHeaderText}>{"Outside Temperature"}</Text></View>
          <View style={Style.outsidetemperature}>
              {this.renderTemperature(1)}
          </View>
          <RequestButton requestChange = {this.requestChange} />
        </View>

      </View>
  );}
 
  requestChange = () => {
    if(this.state.room != 'Choose a Room'){
      this.props.navigator.push({
       name: 'Request Change',
       title: 'Request',
       room: this.state.room
      });
    }
  }
  
 // Need to place this function elsewhere
 renderTemperature(t) {
    var data = require('./test.json');
    let views = [];
    views.push(<View style={Style.temperatureRow} key={data[t]["_id"]} >
                  <Text style={Style.temperatureButtonText}>
                   {data[t]["tempF"] + "         " + data[t]["tempC"]}
                  </Text>
               </View>)
    return views;
 }
}

module.exports = MainPageiOS;