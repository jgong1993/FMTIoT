import { StyleSheet, Dimensions } from 'react-native';

var ModalStyle = StyleSheet.create({

    rootContainer: {
    	flex: 1,
    },
    top:{
    	flex: .37,
    },
    bottom:{
    	flex: .63,
    	backgroundColor: '#FFF7FF'
    },
    backAndConfirmBox: {
    	flex: .15,
    	backgroundColor: '#FFF7FF',
    },
    circleContainer : {
    	flex: .9,
    	flexDirection: 'row',
    	alignItems: 'flex-start',
    	marginTop: 15,
    },
    progressCircle: {
    	flex: .5,
    },
    dualButtonContainer: {
    	flex: .5,
    },
    insideCircleText: {
    	fontFamily: 'quicksand',
    	fontSize: 40,
    	position: 'absolute',
    	top: 52,
    	left: 50,
    },
    dualButtons: {
    	alignItems: 'flex-start',
    	flex: .9
    },
    raiseTempButton: {
    	marginTop: 30,
    	marginRight: 10,
    	width: .45*(Dimensions.get("window").width)
    },
    dropTempButton: {
    	marginTop: 20,
    	marginRight: 10,
    	width: .45*(Dimensions.get("window").width)
    },

    textInputContainer: {
    	flex: .1,
    	alignItems: 'center',
    }

});

export default ModalStyle;