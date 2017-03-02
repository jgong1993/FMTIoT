import React, { Component } from 'react'
import {
   View,
   ListView,
   Text,
   StyleSheet,
   Dimensions, 
   Image,
   TouchableHighlight 
} from 'react-native'

var index = 0;
const iconsMap = {'0': require('./pic/1.jpg'), '1': require('./pic/2.jpg'), '2': require('./pic/3.jpg'), '3': require('./pic/4.jpg')};

export default ListOfRooms = (props) => {
   return (
      <View>
         <ListView
            dataSource = {props.dataSource}
            renderRow = {
               (rowData) => (
                  <TouchableHighlight onPress={()=>{props.selectRoom(rowData)}}>
                     <Image
                      style={styles.listContainer}
                      source={iconsMap[(((index+1)==3)?index=0:index+=1).toString()]}
                     >
                        <View style={styles.listItem}>
                           <View style={styles.left}>
                              <Text style={styles.test1}>
                                 {rowData[0]}
                              </Text>
                              <Text style={styles.test2}>
                                 {rowData[1]}
                              </Text>
                           </View>
                           <View style={styles.right}>
                              <View style={styles.circle}>
                                 <Text style={styles.test3}>
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

const styles = StyleSheet.create ({
   listContainer: {
      marginTop: 5,
      marginBottom: 5,
      width: Dimensions.get("window").width,
      height: 170,
   },
   listItem: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,.65)'
   },
   test1: {
      fontSize: 25,
      color: 'white',
      fontFamily: 'quicksand'
   },
   test2: {
      fontSize: 17,
      marginTop: 6,
      color: 'white',
      fontFamily: 'quicksand'
   },
   test3: {
      fontFamily: 'quicksand-bold'
   },
   left:{
      flex:.7,
      justifyContent: 'center',
      marginTop: 70,
      marginLeft: 15
   },
   right:{
      flex: .3,
      marginTop: 90,
      justifyContent: 'center',
      alignItems: 'center',
   },
   circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 45,
    height: 45,
    borderRadius: 100/2,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
}

})