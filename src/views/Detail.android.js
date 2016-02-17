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
import TimerMixin from 'react-timer-mixin';
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
		this.setTimeout = TimerMixin.setTimeout;
		this.clearTimeout = TimerMixin.clearTimeout;
		this.componentWillUnmount = TimerMixin.componentWillUnmount.bind(this);
				
		this.state = {
			viewPage: this.ds.cloneWithPages([]),
			proDesc: String,
			integral: 0,
			bounceValue: new Animated.Value(-wHeight),
			bounceValue2: new Animated.Value(1),
			sureLayerFadeIn: false,
			overLayerHeight: wHeight,
			message: '',
		}
    }    
	   
	render() {
		let sureLayer;
		if (this.state.sureLayerFadeIn){
			sureLayer = (
				<Animated.View style={[BaseStyles.overLayer, BaseStyles.flex1, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.wWidth, {opacity: this.state.bounceValue2, height: this.state.overLayerHeight}]}>
					<View style={[BaseStyles.overLayerInner, BaseStyles.bgWhite, ]}>
						<View style={[BaseStyles.overLayerHeader, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.noBorder]}><Text style={[BaseStyles.c3]}>{this.state.message}</Text></View>						
					</View>
				</Animated.View>	
			);
		}

        return (
			<ScrollView
			automaticallyAdjustContentInsets={false}
			horizontal={false}
			style={[BaseStyles.bgWhite, BaseStyles.wHeight]}
			ref='scrollViewDetail'
			>
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

				<Animated.View style={[BaseStyles.overLayer, BaseStyles.flex1, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.wWidth, {top: this.state.bounceValue, height: this.state.overLayerHeight}]}>
					<View style={[BaseStyles.overLayerInner, BaseStyles.bgWhite, ]}>
						<View style={[BaseStyles.overLayerHeader, BaseStyles.vCenter, BaseStyles.hCenter,]}><Text>确定兑换该商品吗？</Text></View>
						<View style={[BaseStyles.frow, BaseStyles.flex1,]}>
							<TouchableOpacity activeOpacity={.5} style={[BaseStyles.flex1, BaseStyles.overBtn, BaseStyles.vCenter, BaseStyles.hCenter,]} onPress={this._changeSure.bind(this)}>
								<Text style={[BaseStyles.btnColor2]}>确定</Text>
							</TouchableOpacity>

							<TouchableOpacity activeOpacity={.5} style={[BaseStyles.flex1, BaseStyles.overBtn, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.borderLeft]} onPress={this._overLayerHidden.bind(this)}>
								<Text style={[BaseStyles.btnColor2]}>取消</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Animated.View>

				{sureLayer}
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

	_changeSure(){
		this._overLayerHidden();
		
		let url = http.baseUrl + 'proexchange?json=1&productId=' + this.props.initProps.pid;
		let data = {productId: this.props.initProps.pid};

		http.get(url, 'post', data, (res)=>{
			//Alert.alert('ts', JSON.stringify(res));
			this.setState({sureLayerFadeIn: true, message: res.result.message}); 
			
			this.setTimeout(()=>{
				this.setState({sureLayerFadeIn: false, bounceValue2: new Animated.Value(1)}); 
			}, 3000);

			this.setTimeout(()=>{
				Animated.spring(                    
				  this.state.bounceValue2,           
				  {
					toValue: 0,                     
				  }
				).start();
			}, 2000);

		},err => {
			this.setState({sureLayerFadeIn: true, message: '请求错误！'}); 
			//Alert.alert('ts', res.result.message);
			this.setTimeout(()=>{
				this.setState({sureLayerFadeIn: false, bounceValue2: new Animated.Value(1)}); 
			}, 3000);

			this.setTimeout(()=>{
				Animated.spring(                    
				  this.state.bounceValue2,           
				  {
					toValue: 0,                     
				  }
				).start();
			}, 2000);
		});				  		  
	}

	_overLayerHidden(){
		this.state.bounceValue.setValue(-wHeight)
	}

	_measureWelcome(rName) {
		this.refs[rName].measure(this._logWelcomeLayout);
	}

	_logWelcomeLayout(ox, oy, width, height, px, py) {
		console.log("ox: " + ox);
		console.log("oy: " + oy);
		console.log("width: " + width);
		console.log("height: " + height);
		console.log("px: " + px);
		console.log("py: " + py);
		Alert.alert('height: ', height.toString());
	}
}


module.exports = Detail;