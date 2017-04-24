import { StyleSheet, Dimensions } from 'react-native';

var ListOfRoomsStyle = StyleSheet.create({

listContainer: {
      //marginTop: 2.5,
      //marginBottom: 2.5,
      width: Dimensions.get("window").width,
      height: 172
   },
   listItem: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgba(0,0,0,.55)'
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
     marginLeft: 30,
	  width: 45,
	  height: 45,	
	  borderRadius: 100/2,
	  backgroundColor: 'rgba(255, 255, 255, 0.8)'
	}

});

export default ListOfRoomsStyle;