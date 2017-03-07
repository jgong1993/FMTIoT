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

export default class RoomInformation extends Component {
  constructor() {
      super();
      this.state = {
        isModalOpen: false,
        tempF: 60,
        animating: true,
        activityIndHeight: 80,
        message : ''
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
                      source={require('./pic/2.jpg')}>
                   <View style={[TestStyle.roomInformationTopImage, TestStyle.roomInformationTopImageOverlay]}>
                       <Text style={TestStyle.roomInformationRoomName}> {this.props.room} </Text>
                       <Text style={TestStyle.roomInformationRoomSize}> {this.props.size} </Text>
                   </View>
                </Image>
            </View>
            <View style={TestStyle.roomInformationSubDisplayMiddle}>
                <View style={TestStyle.square}>
                   <Swiper dotColor = {'white'} 
                         activeDotColor = {'#ea665b'} 
                         autoplay = {true} 
                         autoplayTimeout = {5} 
                         height = {210}
                         width = {.9*(Dimensions.get("window").width)}
                         showsButtons={false}>
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
                <View style={TestStyle.hotcold}></View>
                <View style={TestStyle.hotcoldTempButtonBox}>
                  <TouchableHighlight onPress ={()=>{this.openModal()}} underlayColor={ 'transparent' }>
                    <Text style={TestStyle.adjustTempButtonText}> {"Suggest a new temperature for " + this.props.room}</Text>
                  </TouchableHighlight>
                </View>
            </View>
            <ChangeTempModal visibility = {this.state.isModalOpen} 
                             openModal = {this.openModal} 
                             closeModal = {this.closeModal}
                             tempF = {this.state.tempF}
                             requestTempChange = {this.requestTempChange}
                             setMessage = {this.setMessage}
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

  async renderTemperaturePhoton() {
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
          this.setState({initVal: JSON.parse(request.response)["TempF"]});
          this.setState({animating: false});
          this.setState({activityIndHeight: 0});
        }
      }
  };
    await request.open('GET', 'http://fmtiotapi.azurewebsites.net/api/room/getlatest');
    await request.send();
  }

}

module.exports = RoomInformation;