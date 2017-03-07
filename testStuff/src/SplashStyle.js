import { StyleSheet, Dimensions } from 'react-native';

var SplashStyle = StyleSheet.create({

    rootContainer: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: Dimensions.get("window").width,
        height: null,
        
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,.35)',
        flex: .8,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontFamily: 'quicksand-bold',
        fontSize:45,
        marginTop: .3*Dimensions.get("window").height,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 1,
        padding: 10
    },
    buttonContainer: {
        flex: .2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,.35)',
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
    buttonText: {
        color: 'black',
        fontFamily: 'quicksand',
        fontSize: 14
    }


});

export default SplashStyle;