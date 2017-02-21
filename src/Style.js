import { StyleSheet, Dimensions } from 'react-native';

var Style = StyleSheet.create({

    rootContainer: {
        flex: 1
    },
    // Header
    displayContainer: {
        flex: 1,
        backgroundColor: '#ea665b'
    },

    subDisplay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto'
    },

    // Choose a room section
    pickerContiner: {
        color: 'white',
        backgroundColor: '#23AFC9',
    },

    // Temperature Label Section
    tempContainer: {
        flex: 7, 
        backgroundColor: '#0ba7c3'
    },

    currentTemperatureHeaderText: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 20,
    },
    currentTemperatureHeaderText2: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 10,
    },
    outsideTemperatureHeaderText: {
        marginTop: 10,
        fontSize: 20,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
    },

    outsidetemperature: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    insidetemperature: {
        flex: .5,
        flexDirection: 'column',
        alignItems: 'center',
    },

    // Temperature Section
    temperatureButtonText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto'
    },

    temperatureRow: {
        marginTop: 30,
    },

    buttonContainer: {
      marginTop: 20,
      marginBottom: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
    buttonContainer2: {
      marginTop: 55,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },
    temperatureButtonLeft: {
      marginTop: 20,
      marginRight: 6,
      width: (Dimensions.get("window").width/2.2)
   },
   temperatureButtonRight: {
      marginTop: 20,
      marginLeft: 6,
      width: (Dimensions.get("window").width/2.2)
   },
   temperatureText: {
      fontSize: 35,
      color: 'white',
   },
   temperatureButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
   }

});

export default Style;