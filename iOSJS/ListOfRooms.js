import React, { Component } from 'react'

// Components
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Dimensions, 
   Image,
   TouchableHighlight 
} from 'react-native'

// Style Sheets
import ListOfRoomsStyle from './src/ListOfRoomsStyle';

var index = 1;
const iconsMap = {'1': require('../pic/1.jpg'), '2': require('../pic/2.jpg'), '3': require('../pic/3.jpg'), '4': require('../pic/4.jpg')};

export default ListOfRooms = (props) => {
   return (
      <View>
         <ListView
            dataSource = {props.dataSource}
            renderRow = {
               (rowData) => (
                  <TouchableHighlight onPress={()=>{props.selectRoom(rowData)}}>
                     <Image
                      style={ListOfRoomsStyle.listContainer}
                      source={iconsMap[rowData[3]]}
                     >
                        <View style={ListOfRoomsStyle.listItem}>
                           <View style={ListOfRoomsStyle.left}>
                              <Text style={ListOfRoomsStyle.test1}>
                                 {rowData[0]}
                              </Text>
                              <Text style={ListOfRoomsStyle.test2}>
                                 {rowData[1]}
                              </Text>
                           </View>
                           <View style={ListOfRoomsStyle.right}>
                              <View style={ListOfRoomsStyle.circle}>
                                 <Text style={ListOfRoomsStyle.test3}>
                                    {rowData[2]}
                                 </Text>
                              </View>
                           </View>
                        </View>
                     </Image>
                  </TouchableHighlight>
               )}
         />
      </View>
   )
}

