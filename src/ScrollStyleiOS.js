import { StyleSheet, Dimensions } from 'react-native';

var ScrollStyleiOS = StyleSheet.create({

    words: {
        color: 'white',
        fontSize: 17
    },
    wordBox: {
    	alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    diffBox: {
        marginTop: 120,
    	alignItems: 'center',
        justifyContent: 'center',
    },
    diff: {
        color: 'white',
        fontSize: 60
    },
    topdiff: {
        color: 'white',
        fontSize: 40
    },
    insidetemperature: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    slideBox: {
        width: (Dimensions.get('window').width)/1.2,
        marginLeft: ((Dimensions.get('window').width)-(Dimensions.get('window').width)/1.2)/2,
        marginTop: 20

    },

});

export default ScrollStyleiOS;