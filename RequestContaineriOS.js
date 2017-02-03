import React, { Component } from 'react'

// Style Sheets
import StyleiOS from './src/StyleiOS';
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
} from 'react-native'

var base64 =  require('./testBase');

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
         <View style={StyleiOS.rootContainer}>

            <View style={StyleiOS.displayContainer}></View>

            <View style={StyleiOS.tempContainer}>
                <View><Text style={StyleiOS.currentTemperatureHeaderText}>{"Current Temperature"}</Text></View>
                <View style={StyleiOS.insidetemperature}>
                    {this.renderTemperature(0)}
                </View>
                <View>
				</View>
                <View style = {StyleiOS.buttonContainer}>
                   <Button
                    style = {StyleiOS.buttonContainer}
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
