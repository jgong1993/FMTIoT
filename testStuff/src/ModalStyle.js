import { StyleSheet, Dimensions } from 'react-native';

var ModalStyle = StyleSheet.create({

	rootContainer: {
		flex: 1,
	},
	top:{
		flex: .55,
	},
	bottom:{
		flex: .45,
		backgroundColor: '#FFF7FF'
	},
	otherTemperatureContainerColumn:{
		width: (Dimensions.get("window").width)/3,
		alignItems: 'center',
	},
	otherTemperatureContainerColumn2:{
		width: (Dimensions.get("window").width)/3,
		alignItems: 'center',
		justifyContent: 'center',
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
		fontSize: 16,
	},
	label:{
		fontFamily: 'quicksand',
		fontSize: 26,
	},
	circleContainer : {
		flex: .7,
		marginTop: 15,
		flexDirection: 'row',
		justifyContent: 'center',
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
	bottomButtonContainer:{
		flex: .20,
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	submitButtonContainer: {
		flex: 1,
		width: .9*(Dimensions.get("window").width),
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#204B2B',
		marginBottom: 10
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
});

export default ModalStyle;