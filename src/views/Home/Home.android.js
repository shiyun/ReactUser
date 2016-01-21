'use strict';

import React, {
  Component,
  View,
} from 'react-native';

import BaseModules, {
	Header,
	HomeCont,
	Footer,
	Launch,
	Detail,
} from '../../utils/BaseModules';

import BaseUtils, {
    BaseStyles,
} from '../../utils/BaseUtils';

class TopScreen extends Component{

    constructor(props){
        super(props);
    }    	   

	render() {
        return (
			<View style={BaseStyles.flex1}>
				<Header />
				<HomeCont />
				<Footer />
			</View>
		);
    }
	

}

module.exports = TopScreen;