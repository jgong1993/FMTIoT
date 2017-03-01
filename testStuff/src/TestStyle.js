import { StyleSheet, Dimensions } from 'react-native';

var TestStyle = StyleSheet.create({

    rootContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    // Header
    displayContainer: {
        flex: .4,
        backgroundColor: '#ea665b',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    subDisplay: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
    },
    displayContainer2: {
        flex: .10,
        backgroundColor: '#ea665b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    subDisplay2: {
        flex: .90,
        backgroundColor: '#f8f8fa',
    },

    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Roboto'
    },

    headerText2: {
        fontSize: 15,
        color: 'black',
        fontFamily: 'Roboto',
    },
    
});

export default TestStyle;