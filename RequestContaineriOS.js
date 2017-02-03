import React, { Component } from 'react'

// Style Sheets
import Style from './src/StyleiOS';
// External parts

// Components
import {
   View,
   Text,
   StyleSheet,
   Picker,
   ScrollView,
   TouchableOpacity,
   Button,
   Animated,
} from 'react-native'

var base64 = require('base-64');

var accountSid = 'ACc1fece9f19d8f394351120f0ac28360b'; 
var authToken = 'fb58c8a754c370bfe9e73f649b5c7e61'; 
var info = require('./info.json');
// Request page
export default class RequestContaineriOS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Send alert to that one guy',
      temperature: 0,
    };
}
   render() {
      var _scrollView: ScrollView;
      return (
         <View style={Style.rootContainer}>

            <View style={Style.displayContainer}></View>

            <View style={Style.tempContainer}>
                <View><Text style={Style.currentTemperatureHeaderText}>{"Current Temperature"}</Text></View>
                <View style={Style.insidetemperature}>
                    {this.renderTemperature(0)}
                </View>
                <View>
				</View>
                <View style = {Style.buttonContainer}>
                   <Button
                    style = {Style.buttonContainer}
                    color = '#C3270B'
                    title = {this.state.text}
                    accessibilityLabel="Send"
                    onPress = {
                      () => {
                        this.sendMessage(),
                        this.setState({
                          text: "Message has been sent to that one guy!"
                        })
                      }
                    }

                   />
                </View>
            </View>

         </View>
   )}


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

   sendMessage(){
    var http = new XMLHttpRequest();
    var authInfo = info[0]["accountSid"] +":"+ info[0]["authToken"];
    authInfo = base64.encode(authInfo);
    var url = "https://api.twilio.com/2010-04-01/Accounts/"+accountSid+"/Messages.json";
    var params = "To=3233172423&From=+18187228141&Body=It is so hot right now";
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
