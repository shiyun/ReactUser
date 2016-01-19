'use strict';
import React, {
    Component,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

class Footer extends Component{
	constructor(props){
		super(props);
        this.state = {
            callIcon: require('../imgs/call.png'),
            callwrap: require('../imgs/callwrap.png'),
        }
	}

	render(){
		return (
			<View style={BaseStyles.footer}>
				<Image source={this.state.callwrap} style={BaseStyles.footerWrapImg} />
				<TouchableOpacity activeOpacity={.8}>
					<View style={BaseStyles.footerTxtWrap}>
						<View style={[BaseStyles.flex1, BaseStyles.center]}>
							<Image source={this.state.callIcon} style={BaseStyles.callIcon} />
							<Text style={BaseStyles.callTxt}>快速咨询</Text>
						</View>
					</View>					
				</TouchableOpacity>					
			</View>	
		);
	}
}

module.exports = Footer;