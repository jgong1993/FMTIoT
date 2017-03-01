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
const iconsMap = {'0': require('./1.jpg'), '1': require('./2.jpg'), '2': require('./3.jpg'), '3': require('./4.jpg')};

export default ListOfRooms = (props) => {
   return (
      <View>
         <ListView
            style = {styles.listContainer}
            dataSource = {props.dataSource}
            renderRow = {
               (rowData) => (
                  <TouchableHighlight onPress={()=>{props.selectRoom(rowData)}}>
                  <Image
                         style={styles.listItem}
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
   },
   listItem: {
      
      borderWidth: .4,
      borderColor: 'grey',
      width: Dimensions.get("window").width,
      height: 170,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,.4)'
   },
   test1: {
      fontSize: 25,
      color: 'white'
   },
   test2: {
      fontSize: 17,
      marginTop: 6,
      color: 'white'
   },
   left:{
      flex:.7,
      justifyContent: 'center',
      marginTop: 20,
      marginLeft: 15
   },
   right:{
      flex: .3,
      justifyContent: 'center',
   }

})