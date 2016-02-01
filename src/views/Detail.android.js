'use strict';

import React, {
  Animated,
  Alert,
  Component,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import BaseModules, {
	ChangeList,
} from '../utils/BaseModules';

import BaseUtils, {
    BaseStyles,
    wHeight,
    wWidth,
} from '../utils/BaseUtils';

import ViewPager, {} from 'react-native-viewpager';
import HttpService from '../utils/service';
const http = new HttpService();

const locData = {
	iconCoin: require('../images/detail_count.png'),
}

class Detail extends Component{
    constructor(props){
        super(props); 
		
		this.ds = new ViewPager.DataSource({
		  pageHasChanged: (p1, p2) => p1 !== p2,
		});
				
		this.state = {
			viewPage: this.ds.cloneWithPages([]),
			proDesc: String,
			integral: 0,
			bounceValue: new Animated.Value(-wHeight),

		}
    }    
	   
	render() {
        return (
			<ScrollView
			automaticallyAdjustContentInsets={false}
			horizontal={false}
			style={BaseStyles.bgWhite}>
				<ViewPager
						style={BaseStyles.loginWrap}
						dataSource={this.state.viewPage}
						renderPage={this._renderPage}
						isLoop={true}
						autoPlay={true}												
					/>		
				<View style={[BaseStyles.dhBtnWrap, BaseStyles.wWidth,BaseStyles.vCenter, BaseStyles.frow,BaseStyles.mt6,]}>
					<View style={[BaseStyles.frow,BaseStyles.vCenter, BaseStyles.pointWrap,BaseStyles.mb6, BaseStyles.ml10]}>
						<Text style={[BaseStyles.aColor, BaseStyles.needPoint]}>{this.state.integral} </Text>	
						<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, BaseStyles.mt6, {height: 10, width: 10,}]} />	
					</View>
					<TouchableOpacity style={[BaseStyles.btnDh,BaseStyles.vCenter,BaseStyles.hCenter,BaseStyles.mb6, BaseStyles.mr10]} 
									  activeOpacity={.5}
									  onPress={this._btnExchange.bind(this)}>
						<Text style={[BaseStyles.cwhite, BaseStyles.f14]}>兑换</Text>
					</TouchableOpacity>
				</View>
				
				<View style={[BaseStyles.m10]}>
					<Text style={[BaseStyles.c6, BaseStyles.f14, {lineHeight: 18}]}>
						{this.state.proDesc}
					</Text>	
				</View>

				<Animated.View style={[BaseStyles.overLayer, BaseStyles.flex1, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.wHeight, BaseStyles.wWidth, {top: this.state.bounceValue}]}>
					<View style={[BaseStyles.overLayerInner, BaseStyles.bgWhite, ]}>
						<View style={[BaseStyles.overLayerHeader, BaseStyles.vCenter, BaseStyles.hCenter,]}><Text>确定兑换该商品吗？</Text></View>
						<View style={[BaseStyles.frow, BaseStyles.flex1,]}>
							<TouchableOpacity activeOpacity={.5} style={[BaseStyles.flex1, BaseStyles.overBtn, BaseStyles.vCenter, BaseStyles.hCenter,]} onPress={this._overLayerHidden.bind(this)}>
								<Text style={[BaseStyles.btnColor2]}>确定</Text>
							</TouchableOpacity>

							<TouchableOpacity activeOpacity={.5} style={[BaseStyles.flex1, BaseStyles.overBtn, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.borderLeft]} onPress={this._overLayerHidden.bind(this)}>
								<Text style={[BaseStyles.btnColor2]}>取消</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Animated.View>
			</ScrollView>
		);
    }
	
	componentWillMount(){
		const pid = this.props.initProps.pid;
		let url = http.baseUrl + 'mall/commodityDetail?json=1&productId='+pid;
		global.storage.load({
			key: 'userInfo',			
		}).then(res => {
			let data = {accessToken: res.accessToken, productId: pid};		
			http.get(url, 'post', data, (ress)=>{
			//Alert.alert('ts', JSON.stringify(ress));
				const result = ress.result;
				let proDesc = result.description.replace(/<(\S*?)[^>]*>/gi, '');
				this.setState({
					viewPage: this.ds.cloneWithPages(result.picUrls),
					proDesc: proDesc,
					integral: result.integral,
				});
			},err=>{Alert.alert('提示', JSON.stringify(err), [{text: '确定'}])});
		});					
	}

	_renderPage(
        data: Object,
        pageID: number | string,) {
        return (
              <Image				
                source={{uri: data.picUrl}}
                style={[BaseStyles.pageImg2, BaseStyles.wWidth]} />
        );
    } 

	_btnExchange(){
		Animated.spring(                    
		  this.state.bounceValue,           
		  {
			toValue: 0,                     
			friction: 6,                  
			tension: 100,                  
		  }
		).start();  		  
	}

	_overLayerHidden(){
		this.state.bounceValue.setValue(-wHeight)
	}

}


module.exports = Detail;