import React, { Component } from 'react'
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Image,
   Modal,
   ScrollView,
   NetInfo,
   Alert,
   Button,
   Dimensions,
   ProgressBar,
   TouchableHighlight,
   StatusBar
} from 'react-native'

import ModalStyle from './src/ModalStyle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default ChangeTempModal = (props) => {
   return (
      <Modal transparent={true} animationType = {"slide"} visible={props.visibility} onRequestClose={() => props.closeModal()}>
         <View style={ModalStyle.rootContainer}>
            <View style={ModalStyle.top}> 
            </View>
            <View style={ModalStyle.bottom}>
              <View style={{flex: .2}}>
                <View style={ModalStyle.otherTemperatureContainerRow}>
                    <View style={ModalStyle.otherTemperatureContainerColumn}>
                        <Text style={ModalStyle.firstLabel}> {"Current"} </Text>
                    </View>
                    <View style={ModalStyle.otherTemperatureContainerColumn}>
                        <Text style={ModalStyle.firstLabel}> {"Average"} </Text>
                    </View>
                    <View style={ModalStyle.otherTemperatureContainerColumn}>
                        <Text style={ModalStyle.firstLabel}> {"Carlsbad"} </Text>
                    </View>
                </View>
                <View style={ModalStyle.otherTemperatureContainerRow2}>
                    <View style={ModalStyle.otherTemperatureContainerColumn2}>
                        <Text style={ModalStyle.label}> {props.currentF + 'F'} </Text>
                    </View>
                    <View style={ModalStyle.otherTemperatureContainerColumn2}>
                        <Text style={ModalStyle.label}> {"73F"} </Text>
                  </View>
                  <View style={ModalStyle.otherTemperatureContainerColumn2}>
                      <Text style={ModalStyle.label}> {props.outsideTempF} </Text>
                  </View>
                </View>
              </View>

               <View style={{flex:.8}}>
                  <View style={ModalStyle.circleContainer}>
                    <View style={ModalStyle.progressCircle}>
                       <AnimatedCircularProgress
                         size={140}
                         width={16}
                         style={{marginLeft: 20}}
                         fill={props.tempF}
                         tintColor="#81bec3"
                         rotation = {0}
                         backgroundColor="#ebf1f1">
                         {
                           (fill) => (
                             <Text style={ModalStyle.insideCircleText}>
                               {props.tempF + 'F'}
                             </Text>
                           )
                         }
                       </AnimatedCircularProgress>
                    </View>
                    <View style={ModalStyle.dualButtonContainer}>
                       <View style={ModalStyle.dualButtons}>
                          <View style={ModalStyle.raiseTempButton}>
                             <Button
                                color= '#ED6A5A'
                                title="▲ Hotter"
                                accessibilityLabel="Raise Room Temperature"
                                onPress = {()=>{props.requestTempChange(props.tempF+1)}}
                              />
                          </View>
                          <View style={ModalStyle.dropTempButton} >
                             <Button
                                color= '#9EDCBF'
                                title="▼ Cooler"
                                accessibilityLabel="Drop Room Temperature"
                                onPress = {()=>{props.requestTempChange(props.tempF-1)}}
                              />
                          </View>
                       </View>
                    </View>
                  </View>

                  <View style={ModalStyle.bottomButtonContainer}>
                    <View style={ModalStyle.submitButtonContainer}>
                      <TouchableHighlight underlayColor={'transparent'} style={ModalStyle.button} 
                      onPress ={()=>{
                           Alert.alert(
                            'Confirmation',
                            "Are you sure you want to set the temperature to " + props.tempF +"F?",
                            [
                             {text: 'Cancel'},  
                             {text: 'Send', onPress: () => {props.sendMessage()}},
                            ],
                            {
                              cancelable: true
                            }
                        )

                      }}>
                        <Text style={ModalStyle.adjustTempButtonText}> {"Send request"}</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
               </View>

            </View>
         </View>
      </Modal>
   )
}

// NetInfo.isConnected.fetch().then(isConnected => {
//   Alert.alert('First, is ' + (isConnected ? 'online' : 'offline'));
// });