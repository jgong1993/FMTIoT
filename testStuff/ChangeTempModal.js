import React, { Component } from 'react'
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Image,
   Modal,
   ScrollView,
   StatusBar,
   Button,
   NetInfo,
   Alert,
   Dimensions

} from 'react-native'

import ModalStyle from './src/ModalStyle';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import TextField from 'react-native-md-textinput';


export default ChangeTempModal = (props) => {
   return (
      <Modal transparent={true} animationType = {"slide"} visible={props.visibility} onRequestClose={() => props.closeModal()}>
         <View style={ModalStyle.rootContainer}>
            <View style={ModalStyle.top}> 
            </View>
            <View style={ModalStyle.bottom}>
               <ScrollView>
                  <View style={ModalStyle.circleContainer}>
                    <View style={ModalStyle.progressCircle}>
                       <AnimatedCircularProgress
                         size={150}
                         width={20}
                         style={{marginLeft: 15}}
                         fill={props.tempF}
                         tintColor="#70C1B3"
                         rotation = {0}
                         backgroundColor="#B2DBBF">
                         {
                           (fill) => (
                             <Text style={ModalStyle.insideCircleText}>
                               {props.tempF}
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
                  <View style={ModalStyle.textInputContainer}>
                    <TextField onChangeText={(text) => props.setMessage(text)} style={{width: .8*(Dimensions.get("window").width)}} label={'Comment'} highlightColor={'#00BCD4'} />
                  </View>
               </ScrollView>
            </View>
         </View>
      </Modal>
   )
}

// NetInfo.isConnected.fetch().then(isConnected => {
//   Alert.alert('First, is ' + (isConnected ? 'online' : 'offline'));
// });