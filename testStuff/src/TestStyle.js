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
        marginLeft: 10
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
      flex: .55,
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
      alignItems: 'flex-start',
   },
    //Middle
    roomInformationSubDisplayMiddle: {
      flex: .4,
      backgroundColor: '#FFF7FF',
      alignItems: 'center'
    },
    
    roomInformationRoomName: {
      fontSize: 50,
      color: 'white',
      fontFamily: 'quicksand',
      marginLeft: 6,
    },
    roomInformationRoomSize:{
      fontSize: 20,
      color: 'white',
      marginBottom: 15,
      marginLeft: 20,
      fontFamily: 'quicksand'
    },
   square: {
      width: .9*(Dimensions.get("window").width),
      height: 230,
      backgroundColor: '#5A2635',
     // marginTop: ((Dimensions.get("window").width)-(.9*(Dimensions.get("window").width)))/2
   },
   //Bottom
   roomInformationSubDisplayBottom: {
      flex: .06,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#204B2B',
      width: .9*(Dimensions.get("window").width),
      marginLeft: (.1*(Dimensions.get("window").width))/2,
      marginBottom: 10,
   },
   roomInformationSubDisplayBottom2: {
      flex: .075,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#642B2A',
      width: .9*(Dimensions.get("window").width),
      marginLeft: (.1*(Dimensions.get("window").width))/2,
      marginBottom: 10,

   },
   hotcold: {
      flex: .4,
   },
   hotcoldTempButtonBox: {
     flex: 1,
     width: .9*(Dimensions.get("window").width),
     alignItems: 'center',
     justifyContent: 'center',
   },
   adjustTempButtonText:{
    fontSize: 14,
    color: 'white',
    fontFamily: 'quicksand-bold'
   },
   button: {
    width: .8*Dimensions.get("window").width,
    alignItems: 'center',
    justifyContent: 'center'
   },
    button2: {
    },
    
});

export default TestStyle;