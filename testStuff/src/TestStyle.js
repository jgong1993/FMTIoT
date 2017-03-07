import { StyleSheet, Dimensions } from 'react-native';

var TestStyle = StyleSheet.create({

    rootContainer: {
        flex: 1,
    },
    // TesMain stuff
    testMainDisplayContainer: {
        flex: .4,
        backgroundColor: '#ea665b',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    testSubDisplayContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
    },
    testHeaderText: {
        fontSize: 18,
        color: 'white',
        fontFamily: 'Roboto'
    },

    // Select Room Page Stuff
    selectRoomDisplayContainer: {
        flex: .10,
        backgroundColor: '#6071DC',
        alignItems: 'center',
        justifyContent: 'center',
    },

    selectRoomheaderText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'quicksand'
    },

    selectRoomSubDisplay: {
        flex: .90,
        backgroundColor: '#FFF7FF',
        width: .96*(Dimensions.get("window").width),
        marginLeft: ((Dimensions.get("window").width)-.96*(Dimensions.get("window").width))/2
    },


    // Room Information Stuff
    // Top
    roomInformationDisplay: {
        flex: .10,
        backgroundColor: '#f8f8fa',
    },
    roomInformationDisplayContainer: {
        flex: .5,
      flexDirection: 'row',
      backgroundColor: 'white',
    },
    roomInformationSubDisplay: {
      flex: .90,
      backgroundColor: '#f8f8fa',
    },
    roomInformationSubDisplayTop: {
      flex: .4,
    },
    roomInformationTopImage: {
      flex:1,
      width: null,
      height: null,
      backgroundColor: 'rgba(0,0,0,.55)',
      position: 'relative'
    },
    roomInformationTopImageOverlay: {
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
   },
    //Middle
    roomInformationSubDisplayMiddle: {
      flex: .4,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF7FF',
    },
    
    roomInformationRoomName: {
      fontSize: 50,
      color: 'white',
      fontFamily: 'quicksand'
    },
    roomInformationRoomSize:{
      fontSize: 20,
      color: 'white',
      marginBottom: 10,
      fontFamily: 'quicksand'
    },
   square: {
      width: .9*(Dimensions.get("window").width),
      height: 210,
      backgroundColor: '#6071DC',
   },
   //Bottom
   roomInformationSubDisplayBottom: {
      flex: .2,
      backgroundColor: '#FFF7FF',
      alignItems: 'center',
   },
   hotcold:{
      flex: .5,
      alignItems: 'center',
   },
   hotcoldTempButtonBox: {
     flex: .5,
     width: .9*(Dimensions.get("window").width),
     alignItems: 'center',
     justifyContent: 'center',
     borderWidth: 1,
     borderColor: 'black',
     borderRadius: 5,
     marginBottom: 40
   },
   adjustTempButtonText:{
    fontSize: 15,
    color: 'black',
    fontFamily: 'quicksand'
   }
    
});

export default TestStyle;