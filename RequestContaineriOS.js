import React, { Component } from 'react'

// Style Sheets
import StyleiOS from './src/StyleiOS';
import ScrollStyleiOS from './src/ScrollStyleiOS';

// External parts

// Components
import {
   View,
   Text,
   StyleSheet,
   Picker,
   ScrollView,
   TouchableHighlight,
   Button,
   Slider
} from 'react-native'

var base64 =  require('./testBase');
var info = require('./info.json');
var data = require('./test.json');

// Request page
export default class RequestContaineriOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Send alert to that one guy',
      temperature: 0,
      message: '',
      otherValue: 79
    };
}
   render() {
      var _scrollView: ScrollView;
      return (
         <View style={StyleiOS.rootContainer}>

            <View style={StyleiOS.displayContainer}></View>

            <View style={StyleiOS.tempContainer}>
                <View><Text style={StyleiOS.currentTemperatureHeaderText}>{"Current Temperature"}</Text></View>
                <View style={ScrollStyleiOS.insidetemperature}>
                    {this.renderTemperature(0)}
                </View>
                <View style={ScrollStyleiOS.diffBox}>
                   <Text style={ScrollStyleiOS.topdiff}>
                       {'Difference'}
                   </Text>
                  <Text style={ScrollStyleiOS.diff}>
                      { 
                         this.getNewTemp(Number.parseInt(this.state.otherValue) - Number.parseInt(data[0]["tempF"]))+ '°F'
                      }
                  </Text>
                </View>
                <View style={ScrollStyleiOS.wordBox}>
                  <Text style={ScrollStyleiOS.words}>
                      {"I want to change the temperature to: " + this.state.otherValue + '°F'}
                  </Text>
                </View>
                <View style={ScrollStyleiOS.slideBox}>
                  <Slider
                   maximumValue = {100}
                   minimumValue = {50}
                   value = {79}
                   step = {1}
                   onValueChange={(value) => this.setState({
                      message: 'Can you please set the temperature to ' + value + '°F',
                      otherValue : value,
                   })} 
                  />
                </View>
                <View style = {StyleiOS.buttonContainer1}>
                    <TouchableHighlight 
                      activeOpacity={2}
                      onPress = {
                      () => {
                        this.sendMessage(),
                        this.setState({
                          text: "Message has been sent to that one guy!"
                        })
                      }}> 
                      <Text style={StyleiOS.requestButton}>{this.state.text}</Text> 
                    </TouchableHighlight>
                </View>

            </View>

         </View>
   )}

   getNewTemp(x){
     var n = Number.parseInt(this.state.otherValue) - Number.parseInt(data[0]["tempF"]);
     if(n > 0){
      return "+" + n;
    }else if(n == 0){
      return n;
    }
    else{
      return n;
    }
   }

   renderTemperature(t) {
       let views = [];
       views.push(<View style={StyleiOS.temperatureRow} key={data[t]["_id"]} >
                     <Text style={StyleiOS.temperatureButtonText}>
                      {data[t]["tempF"] + "         " + data[t]["tempC"]}
                     </Text>
                  </View>)
       return views;
   }

   sendMessage(){
    var http = new XMLHttpRequest();
    var authInfo = info[0]["accountSid"] +":"+ info[0]["authToken"];
    authInfo = base64.encode(authInfo);
    var url = "https://api.twilio.com/2010-04-01/Accounts/"+info[0]["accountSid"] +"/Messages.json";
    var params = "To=3233172423&From=+18187228141&Body=" + this.state.message;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-Length", "50");
    http.setRequestHeader("Authorization", "Basic " + authInfo);
    http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
    }
    http.send(params);
  }
}
