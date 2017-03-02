import React, { Component } from 'react';

// Style Sheets
import TestStyle from './src/TestStyle';
import SwiperStyle from './src/SwiperStyle';
// External parts to the page
import Swiper from 'react-native-swiper';

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
  Modal
} from 'react-native';
var navigator; 

export default class RoomInformation extends Component {
  constructor(nav) {
      super(nav);
      navigator = nav;
  }
  
  render() {
    return (
      <View style={TestStyle.rootContainer}>
        <View style={TestStyle.roomInformationSubDisplay}>
            <View style={TestStyle.roomInformationSubDisplayTop}>
                <Image
                      style={TestStyle.roomInformationTopImage}
                      source={require('./pic/2.jpg')}
                 >
                 <View style={[TestStyle.roomInformationTopImage, TestStyle.roomInformationTopImageOverlay]}>
                    <Text style={TestStyle.roomInformationRoomName}>
                           {this.props.room}
                   </Text>
                   <Text style={TestStyle.roomInformationRoomSize}>
                           {this.props.size}
                   </Text>
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
                          <Text style={SwiperStyle.slideTextTitle}>{"Temperature (°F)"}</Text>
                          <Text style={SwiperStyle.slideText}>{"75"}</Text>
                        </View>
                        <View style={SwiperStyle.slide}>
                          <Text style={SwiperStyle.slideTextTitle}>{"Temperature (°C)"}</Text>
                          <Text style={SwiperStyle.slideText}>{"15"}</Text>
                        </View>
                        <View style={SwiperStyle.slide}>
                          <Text style={SwiperStyle.slideTextTitle}>{"Humidity (%)"}</Text>
                          <Text style={SwiperStyle.slideText}>{"55"}</Text>
                        </View>
                  </Swiper>
                </View>
            </View>
            <View style={TestStyle.roomInformationSubDisplayBottom}>
                <View style={TestStyle.hotcold}>
                </View>
                <View style={TestStyle.hotcoldTempButtonBox}>
                  <TouchableHighlight onPress ={()=>{this.changeRoomTemperature()}} underlayColor={ 'transparent' }>
                    <Text style={TestStyle.adjustTempButtonText}> {"Suggest a new temperature for " + this.props.room}</Text>
                  </TouchableHighlight>
                </View>
            </View>
        </View>
      </View>
  );}

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
    var date = weekday[today.getDay()]+' '+ month[(today.getMonth()+1)]+' '+today.getDate()+', ' + today.getFullYear();
    return date;
  }

changeRoomTemperature(){
  this.props.navigator.push({
       name: 'Change Room Temperature',
       title: 'changeRoomTemperature',
       room: this.props.room,
       size: this.props.size
      });
}
}


module.exports = RoomInformation;

        // <View style={TestStyle.roomInformationDisplay}>
        //   <View style={TestStyle.roomInformationDisplayContainer}>
        //        <View style={TestStyle.roomInformationRight}>
        //           <View>
        //              <Text style={TestStyle.roomInformationDateTopRight}>
        //                  {this.getTodaysDate()}
        //              </Text>
        //           </View>
        //        </View>
        //   </View>
        // </View>
    //         roomInformationLeft: {
    //   flex:.4,
    //   justifyContent: 'center',
    //   marginLeft: 15,
    //   marginBottom: 15
    // },
    // roomInformationRight:{
    //   flex: .6,
    //   justifyContent: 'center',
    //   alignItems: 'flex-end',
    //   marginRight: 20
    // },
    // roomInformationDateTopRight: {
    //   fontSize: 15,
    //   color: 'black',
    //   fontFamily: 'Roboto',
    // },
    // roomInformationDateTopLeft: {
    //   fontSize: 15,
    //   color: 'black',
    //   fontFamily: 'Roboto',
    // },