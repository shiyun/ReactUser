'use strict';
import React, {
  Dimensions,
} from 'react-native';


let BaseUtils = {
	get BaseStyles(){return require('../styles/styles.js');},
	get wWidth() {return Dimensions.get('window').width;},
	get wHeight() {return Dimensions.get('window').height;},
}

module.exports = BaseUtils;