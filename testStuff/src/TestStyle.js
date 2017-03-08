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
        backgroundColor: '#5A2635',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },

    selectRoomheaderText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'quicksand',
        marginLeft: 20
    },

    selectRoomSubDisplay: {
        flex: .90,
        backgroundColor: '#FFF7FF',
        width: (Dimensions.get("window").width),
        //marginLeft: ((Dimensions.get("window").width)-.98*(Dimensions.get("window").width))/2
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
      flex: .5,
      alignItems: 'center',
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
      marginBottom: 15,
      fontFamily: 'quicksand'
    },
   square: {
      width: .9*(Dimensions.get("window").width),
      height: 240,
      backgroundColor: '#5A2635',
      marginTop: ((Dimensions.get("window").width)-(.9*(Dimensions.get("window").width)))/2
   },
   //Bottom
   roomInformationSubDisplayBottom: {
      flex: .1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFF7FF'
   },
   hotcold: {
      flex: .4,
   },
   hotcoldTempButtonBox: {
     flex: .6,
     width: .9*(Dimensions.get("window").width),
     alignItems: 'center',
     justifyContent: 'center',
   },
   adjustTempButtonText:{
    fontSize: 14,
    color: '#5A2635',
    fontFamily: 'quicksand-bold'
   },
   button: {
        width: .8*Dimensions.get("window").width,
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button2: {
        marginTop: 10,
    },
    
});

export default TestStyle;