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
    otherTemperatureContainerColumn:{
    	width: (Dimensions.get("window").width)/3,
    	alignItems: 'center',
    	marginTop: 15
    },
    otherTemperatureContainerColumn2:{
    	width: (Dimensions.get("window").width)/3,
    	alignItems: 'center',
    	justifyContent: 'center'
    },
    otherTemperatureContainerRow:{
    	flex:.1,
		flexDirection: 'row',
    },
    otherTemperatureContainerRow2:{
    	flex:.2,
		flexDirection: 'row',
    },
    firstLabel: {
    	fontFamily: 'quicksand',
     	fontSize: 15,
    },
    label:{
    	fontFamily: 'quicksand',
     	fontSize: 25,
    },

    // titleLabel: {
    // 	fontFamily: 'quicksand',
    // 	fontSize: 15,
    // 	textDecorationLine: 'underline'

    // },
    circleContainer : {
    	flex: .7,
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
    	left: 39,
    },
    dualButtons: {
    	alignItems: 'center',
    	flex: .9
    },
    raiseTempButton: {
    	marginTop: 30,
    	marginRight: 10,
    	width: .43*(Dimensions.get("window").width)
    },
    dropTempButton: {
    	marginTop: 20,
    	marginRight: 10,
    	width: .43*(Dimensions.get("window").width)
    },
});

export default ModalStyle;