'use strict';
import React, {
    Component,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            huodong: require('../imgs/huodong.png'),
            userIcon: require('../imgs/user_icon.png'),
            normalOrder: require('../imgs/normal.png'),
            hometitle: require('../imgs/hometitle.png'),
        }
    }

    render(){
		let leftBtn = (
				<View style={BaseStyles.leftBtnWrap}>
					<TouchableOpacity><Image source={this.state.userIcon} style={BaseStyles.leftImg} /></TouchableOpacity>
				</View>
			);
		let indexTit = (
				<View style={BaseStyles.indexTitWrap}>
					<Image source={this.state.hometitle} style={BaseStyles.indexTitImg} />
				</View>
			);
		let rightBtn = (
				<View style={BaseStyles.rightBtnWrap}>
					<View style={BaseStyles.h16}>
						<View style={BaseStyles.flex1}>
							<View style={BaseStyles.huodong}>					
								<TouchableOpacity><Image source={this.state.huodong} style={BaseStyles.RightImg} /></TouchableOpacity>
							</View>
							<View style={[BaseStyles.huodong,{borderRightColor: 'rgba(0,0,0,0)'}]}>					
								<TouchableOpacity><Image source={this.state.normalOrder} style={BaseStyles.RightImg} /></TouchableOpacity>
							</View>
						</View>
					</View>
				</View>
			);
		
		return(
			<View style={this.props.style}>
				<View style={BaseStyles.headerInner}>
					{leftBtn}
					{indexTit}
					{rightBtn}
				</View>
			</View>
        );
    }
}

module.exports = Header;