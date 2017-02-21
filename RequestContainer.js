import React, { Component } from 'react'

// Style Sheets
import Style from './src/Style';
import ScrollStyle from './src/ScrollStyle';
// External parts
import Swiper from 'react-native-swiper';
// Components
import {
   View,
   Text,
   StyleSheet,
   Picker,
   Alert,
   TouchableOpacity,
   Button,
   Slider,
} from 'react-native'

var base64 = require('base-64');

var info = require('./info.json');
var data = require('./test.json');

var RouteStack = {
  app: {
    component: RequestContainer 
  }
}


// Request page
export default class RequestContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '✉   Send alert to that one guy',
      message: '',
      valueToSet: '',
      insideTempF: '',
      insideTempC: '',
      outsideTempF: '',
      outsideTempC: '',
      max: 100,
      min: 50,
      initVal: ''
    };
    this.renderTemperaturePhoton();
    this.renderTemperatureOutisde();
  }
   render() {
      return (
         <View style={Style.rootContainer}>
            {/* View to have the orange bar at the top */}
            <View style={Style.displayContainer}></View>
            {/* View containing the rest of the screen */}
            <View style={Style.tempContainer}>
                 {/* Current Temperature Label */}
                 <View><Text style={Style.currentTemperatureHeaderText2}>{"Current Temperature"}</Text></View>
                 {/* Swiper */}
                 <Swiper dotColor = {'white'} 
                         activeDotColor = {'#ea665b'} 
                         height={110} 
                         autoplay = {true} 
                         autoplayTimeout = {5} 
                         prevButton = {
                          <Text style={ScrollStyle.arrows}>‹</Text>
                         }
                         nextButton = {
                          <Text style={ScrollStyle.arrows}>›</Text>
                         }
                         showsButtons={false}>
                        <View style={ScrollStyle.slide1}>
                          <Text style={ScrollStyle.slideText}>{this.state.insideTempF}</Text>
                        </View>
                        <View style={ScrollStyle.slide2}>
                          <Text style={ScrollStyle.slideText}>{this.state.insideTempC}</Text>
                        </View>
                </Swiper>

                {/* Change Temperature Label */}
                <View style={ScrollStyle.diffBox}>
                   <Text style={ScrollStyle.topdiff}>
                       {'Change Temperature To:'}
                   </Text>
                  <Text style={ScrollStyle.diff}>
                      { 
                         this.state.valueToSet
                      }
                  </Text>
                </View>

                {/* Slider with the Temperature Range */}
                <View>
                  <Slider
                   maximumValue = {this.state.max}
                   minimumValue = {this.state.min}
                   value = {75}
                   step = {1}
                   onValueChange={(value) => this.setState({
                      message: 'Can you please set the temperature to ' + value + '°F',
                      valueToSet : value + '°F',
                   })} 
                  />
                  {/*  */}
                  <View style={ScrollStyle.rangeTextBox}>
                     <Text style={ScrollStyle.rangeText}> {"Temperature Range"} </Text>
                  </View>

                  <View style = {Style.temperatureButtonContainer}>
                    <View style = {Style.temperatureButtonLeft}>
                      <Button
                        color= '#81b3e1'
                        title= {"▲ Minimum to " + (this.state.min+1)}
                        onPress = {() => this.setState({
                            min: this.state.min + 1,
                        })}
                      />
                    </View>
                    <View style = {Style.temperatureButtonRight}>
                     <Button
                        color= '#6d1717'
                        title= {"▲ Maximum to " + (this.state.max+1)}
                        onPress = {() => this.setState({
                            max: this.state.max + 1,
                        })}
                      />
                    </View>
                  </View>

                  <View style = {Style.temperatureButtonContainer}>
                    <View style = {Style.temperatureButtonLeft}>
                      <Button
                        color= '#81b3e1'
                        title= {"▼ Minimum to " + (this.state.min-1)}
                        onPress = {() => this.setState({
                            min: this.state.min - 1,
                        })}
                      />
                    </View>
                    <View style = {Style.temperatureButtonRight}>
                     <Button
                        color= '#6d1717'
                        title= {"▼ Maximum to " + (this.state.max-1)}
                        onPress = {() => this.setState({
                            max: this.state.max - 1,
                        })}
                      />
                    </View>
                  </View>
                </View>



                <View style = {Style.buttonContainer2}>                                       
                   <Button
                    color = '#C3270B'
                    title = {this.state.text}
                    accessibilityLabel="Send"
                    onPress = {
                      () => {
                        Alert.alert(
                          'Confirmation',
                          "Are you sure you want to send this message?",
                          [
                           {text: 'Cancel'},  
                           {text: 'Send', onPress: () => {
                            //this.sendMessage(),
                            this.setState({
                              text: "Message has been sent to that one guy!"
                            })
                           }},
                          ],
                          {
                            cancelable: true
                          }
                        )
                      }
                    }/>
                </View>

            </View>
         </View>
   )}


   sendMessage(){
    this.popup.alert(1);
    var http = new XMLHttpRequest();
    var authInfo = info[0]["accountSid"] +":"+ info[0]["authToken"];
    authInfo = base64.encode(authInfo);
    var url = "https://api.twilio.com/2010-04-01/Accounts/"+info[0]["accountSid"]+"/Messages.json";
    var params = "To=3233172423&From=+18187228141&Body=" + this.state.message;
    http.open("POST", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.setRequestHeader("Content-Length", "50");
    http.setRequestHeader("Authorization", "Basic " + authInfo);
    http.onreadystatechange = function() {//Call a function when the state changes.rr
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
    }
    http.send(params);
  }

  renderTemperaturePhoton() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
       if (request.readyState == 4 ) {
        if(request.response.contains("DOCTYPE")){
          this.setState({insideTempF: "No data"});
          this.setState({insideTempC: "available"});
          this.setState({valueToSet: "No data "});
        }else{
          this.setState({insideTempF : JSON.parse(request.response)["TempF"]+"°F"});
          this.setState({insideTempC : JSON.parse(request.response)["TempC"]+"°C"});
          this.setState({valueToSet: JSON.parse(request.response)["TempF"]+"°F"});
        }
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