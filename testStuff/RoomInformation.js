import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';
import SwiperStyle from './src/SwiperStyle';

// External parts to the page
import Swiper from 'react-native-swiper';
import ChangeTempModal from './ChangeTempModal'

// Components
import { 
  View, 
  Text, 
  Navigator, 
  Picker,
  Button,
  Alert,
  Image,
  TouchableHighlight,
  Dimensions,
  Modal,
  ActivityIndicator
} from 'react-native';

const iconsMap = {'1': require('./pic/1.jpg'), '2': require('./pic/2.jpg'), '3': require('./pic/3.jpg'), '4': require('./pic/4.jpg')};
var info = require('../info.json');
var base64 = require('base-64');

export default class RoomInformation extends Component {
  constructor() {
      super();
      this.state = {
        isModalOpen: false,
        tempF: 70,
        animating: true,
        activityIndHeight: 80,
        message : '',
        arrowColor: '#5A2635'

      };
      this.renderTemperaturePhoton();
  }


  render() {
    return (
      <View style={TestStyle.rootContainer}>
        <View style={TestStyle.roomInformationSubDisplay}>
            <View style={TestStyle.roomInformationSubDisplayTop}>
                <Image
                      style={TestStyle.roomInformationTopImage}
                      source={iconsMap[this.props.roomImage]}>
                   <View style={[TestStyle.roomInformationTopImage, TestStyle.roomInformationTopImageOverlay]}>
                       <Text style={TestStyle.roomInformationRoomName}> {this.props.room} </Text>
                       <Text style={TestStyle.roomInformationRoomSize}> {this.props.size} </Text>
                   </View>
                </Image>
            </View>
            <View style={TestStyle.roomInformationSubDisplayMiddle}>

                  <View style={{marginTop: 20}}>
                  </View>

                <View style={TestStyle.square}>
                   <Swiper dotColor = {'gray'} 
                         activeDotColor = {'#3C5925'} 
                         autoplay = {true} 
                         autoplayTimeout = {5} 
                         height = {230}
                         showsPagination={false}
                         width = {.9*(Dimensions.get("window").width)}
                         prevButton = {
                          <Text style={{fontSize: 20, color: this.state.arrowColor}}>‹</Text>
                         }
                         nextButton = {
                          <Text style={{fontSize: 20, color: this.state.arrowColor}}>›</Text>
                         }
                         showsButtons={true}>
                        <View style={SwiperStyle.slide}>
                          <ActivityIndicator
                            animating={this.state.animating}
                            style={{height: this.state.activityIndHeight}}
                            size="large"
                          />
                          <Text style={SwiperStyle.slideTextTitle}> {"Temperature (°F)"} </Text>
                          <Text style={SwiperStyle.slideText}> {this.state.insideTempF} </Text>
                        </View>
                        <View style={SwiperStyle.slide}>
                          <ActivityIndicator
                            animating={this.state.animating}
                            style={{height: this.state.activityIndHeight}}
                            size="large"
                          />
                          <Text style={SwiperStyle.slideTextTitle}>{"Temperature (°C)"}</Text>
                          <Text style={SwiperStyle.slideText}>{this.state.insideTempC}</Text>
                        </View>
                        <View style={SwiperStyle.slide}>
                          <ActivityIndicator
                            animating={this.state.animating}
                            style={{height: this.state.activityIndHeight}}
                            size="large"
                          />
                          <Text style={SwiperStyle.slideTextTitle}>{"Humidity (%)"}</Text>
                          <Text style={SwiperStyle.slideText}>{"55"}</Text>
                        </View>
                  </Swiper>
                </View>
            </View>
            <View style={TestStyle.roomInformationSubDisplayBottom}>
                <View style={TestStyle.hotcoldTempButtonBox}>
                  <TouchableHighlight underlayColor={'transparent'} style={[TestStyle.button, TestStyle.button2]} onPress ={()=>{this.openModal()}}>
                    <Text style={TestStyle.adjustTempButtonText}> {"Suggest A New Temperature"}</Text>
                  </TouchableHighlight>
                </View>
            </View>

            <ChangeTempModal visibility = {this.state.isModalOpen} 
                             openModal = {this.openModal} 
                             closeModal = {this.closeModal}
                             tempF = {this.state.tempF}
                             requestTempChange = {this.requestTempChange}
                             message = {this.state.message}
                             setMessage = {this.setMessage}
                             sendMessage = {this.sendMessage}
                              />
        </View>
      </View>
  );}

  setMessage = (x) => {
    this.setState({message: x});
  }
  openModal = () => {
    this.setState({isModalOpen: true});
  }
  closeModal = () => {
    this.setState({isModalOpen: false});
  }
  requestTempChange = (x) => {
    this.setState({tempF: x});
  }
  changeRoomTemperature(){
    this.props.navigator.push({
       name: 'Change Room Temperature',
       title: 'changeRoomTemperature',
       room: this.props.room,
       size: this.props.size
      });
  }

  sendMessage = () => {
    var http = new XMLHttpRequest();
    var authInfo = info[0]["accountSid"] +":"+ info[0]["authToken"];
    authInfo = base64.encode(authInfo);
    var url = "https://api.twilio.com/2010-04-01/Accounts/"+info[0]["accountSid"]+"/Messages.json";
    var params = "To=3233172423&From=+18187228141&Body=Can you set " +this.props.room +" to " + this.state.tempF + "F";
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

  async renderTemperaturePhoton() {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
       if (request.readyState == 4 ) {
        if(request.response.contains("DOCTYPE")){
          this.setState({insideTempF: "No data"});
          this.setState({insideTempC: "available"});
          this.setState({valueToSet: "No data "});
        }else{
          this.setState({insideTempF : JSON.parse(request.response)["TempF"]});
          this.setState({insideTempC : JSON.parse(request.response)["TempC"]});
          this.setState({valueToSet: JSON.parse(request.response)["TempF"]+"°F"});
          this.setState({initVal: JSON.parse(request.response)["TempF"]});
          this.setState({animating: false});
          this.setState({activityIndHeight: 0});
          this.setState({arrowColor: 'white'})
        }
      }
  };
    await request.open('GET', 'http://fmtiotapi.azurewebsites.net/api/room/getlatest');
    await request.send();
  }

}

module.exports = RoomInformation;