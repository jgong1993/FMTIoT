import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({

    rootContainer: {
        flex: 1
    },
    // Header
    displayContainer: {
        flex: 1,
        backgroundColor: '#ea665b'
    },

    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto'
    },

    subDisplay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
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
        fontSize: 30,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
        marginTop: 20
    },

    outsideTemperatureHeaderText: {
        fontSize: 35,
        color: 'white',
        fontFamily: 'Roboto',
        textAlign: 'center',
    },

    outsidetemperature: {
        flex: .5,
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
      marginTop: 100,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
   },

});

export default Style;