import React, { Component } from 'react';

// Style Sheets
import Style from './src/Style';

// External parts to the page
import RequestButton from './RequestButton'
import TemperatureCharts from './TemperatureCharts'

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
export default class MainPage extends Component {
  watchID = (null : ?number);
  state = {
    room: 'Choose a Room',
    insideTempF: '',
    insideTempC: '',
    outsideTempF: '',
    outsideTempC: ''
      };
  constructor() {
      super()
      this.renderTemperaturePhoton();
      this.renderTemperatureOutisde();
  }
  
  render() {
    return (
      <View style={Style.rootContainer}>

        <View style={Style.displayContainer}>
            <View style={Style.subDisplay}>
                  <Text style={Style.headerText}> Smart Room </Text>
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

          <View>
             <Text style={Style.currentTemperatureHeaderText}>
                {"Current Temperature"}
             </Text>
          </View>

          <View style={Style.insidetemperature}>
             <Text style={Style.temperatureText}> 
                {this.state.insideTempF + "        " + this.state.insideTempC}
             </Text>
             <Text style={Style.outsideTemperatureHeaderText}>
                {"Outside Temperature"}
             </Text>
              <Text style={Style.temperatureText}> 
                  {this.state.outsideTempF + "        " + this.state.outsideTempC} 
             </Text>
          </View>
          <TemperatureCharts />
          <RequestButton requestChange = {this.requestChange} />
        </View>

      </View>
  );}
 
  requestChange = () => {
    if(this.state.room != 'Choose a sRoom'){
      this.props.navigator.push({
       name: 'Request Change',
       title: 'Request',
       room: this.state.room
      });
    }
  }

  renderTemperaturePhoton() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState == 4 ) {
    
          this.setState({insideTempF : JSON.parse(request.response)["TempF"]+"°F"});
          this.setState({insideTempC : JSON.parse(request.response)["TempC"]+"°C"})
        
      }
    };
    request.open('GET', 'http://fmtiotapi.azurewebsites.net/api/room/getlatest');
    request.send();
  }
  renderTemperatureOutisde() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
      if (request.readyState == 4 ) {
        var tF = (JSON.parse(request.response)["main"]["temp"])*(9/5)-459.67;
        var tC = (JSON.parse(request.response)["main"]["temp"])-273.15;
        this.setState({outsideTempF : Math.round(tF)+"°F"});
        this.setState({outsideTempC : Math.round(tC)+"°C"});
      }
    };
    request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Carlsbad&APPID=bbf44c86869ad7545bb2f3484ced8359');
    request.send();
  }

}

module.exports = MainPage;