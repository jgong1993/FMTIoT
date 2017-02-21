import { StyleSheet, Dimensions } from 'react-native';

var ScrollStyle = StyleSheet.create({

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
    	alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    diff: {
        color: 'white',
        fontSize: 40,
    },
    topdiff: {
        color: 'white',
        fontSize: 20
    },
    slide1: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#0ba7c3',
  	},
  	slide2: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#0ba7c3',
  	},
  	slideText: {
	  	color: '#fff',
	    fontSize: 40,
	    marginBottom: 30
	},
	arrows: {
		fontSize: 50,
		alignItems: 'center',
		color: 'white',
		marginBottom: 30
	},
    rangeTextBox: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    rangeText: {
        marginTop: 15,
        color: 'white',
        fontSize: 20
    },

});

export default ScrollStyle;