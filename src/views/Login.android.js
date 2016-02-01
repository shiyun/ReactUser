'use strict';
import React, {
    Component,
    View,
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
} from 'react-native';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

import BaseModules, {
	Home,
} from '../utils/BaseModules';

import TimerMixin from 'react-timer-mixin';
import HttpService from '../utils/service';
const http = new HttpService();

const Login = React.createClass({
	
	mixins: [TimerMixin], 
	
	getInitialState: function(){
		return {
			phone: 1,
			verifyCode: 1,
			sec: 10,
			isClick: false,
		}
	},

	render: function(){
		let btn = this.state.isClick == false ? (	<View style={[BaseStyles.btnGetCodeWrap]}>
												<TouchableOpacity style={[BaseStyles.flex1,BaseStyles.vCenter, BaseStyles.hCenter,]} onPress={this._getsmscode}>
													<Text style={[BaseStyles.btnGetCode]} ref="btn">获取验证码</Text>
												</TouchableOpacity>						
											</View>
										  ) : ( <View style={[BaseStyles.btnGetCodeWrap, BaseStyles.btnGetCodeWrap2,BaseStyles.vCenter, BaseStyles.hCenter,]}>
													<Text style={[BaseStyles.btnGetCode]} ref="btn">{this.state.sec}秒</Text>
												</View>											
											  );
		return (
			<View style={[BaseStyles.flex1,BaseStyles.vCenter, BaseStyles.hCenter,]}>
				<View style={[BaseStyles.loginWrap,]}>
					<View style={[BaseStyles.inpWrap]}>
						<TextInput 
							style={[BaseStyles.loginInput]}
							keyboardType={'numeric'}
							maxLength={11}
							onChangeText={txt=>this.setState({phone: txt})}
						/>
					</View>			
					<View style={[BaseStyles.flex1, BaseStyles.frow, BaseStyles.inpWrap2,]}>
						<View style={[BaseStyles.inpWrap, BaseStyles.leftInputWidth]}>
							<TextInput 
								style={[BaseStyles.loginInput, BaseStyles.leftInputWidth]}
								keyboardType={'numeric'}
								maxLength={6}
								onChangeText={txt=>this.setState({verifyCode: txt})}
							/>
						</View>
						{btn}
					</View>			
					<View style={[BaseStyles.inpWrap]}>
						<View style={[BaseStyles.btnBeginUseWrap,BaseStyles.flex1]}>
							<TouchableOpacity style={[BaseStyles.flex1,BaseStyles.vCenter, BaseStyles.hCenter,]} onPress={this._btnSubmit}>
								<Text style={[BaseStyles.btnGetCode]}>开始使用</Text>
							</TouchableOpacity>	
						</View>
					</View>			
				</View>			
			</View>
		)
	},
	
	_getsmscode: function(){
		let url = http.baseUrl + 'getsmscode?json=1';
		let data = {phone:  this.state.phone, type: 1};
		let time;
		if (/^1\d{10}$/.test(this.state.phone)){		
			http.get(url,'post', data, (res)=>{				
				this.setState({isClick: true});
				time = this.setInterval(()=>{
					this.setState({sec: this.state.sec-=1});
					//console.log(this.state.sec);
					if (this.state.sec == 0){
						this.setState({isClick: false});
						this.clearInterval(time);
					}
				}, 1000);
			});
		}else{
			Alert.alert('提示', '您填写的手机号码不正确！', [{text: '确定'}]);
		}
	},
	
	_btnSubmit: function(){
		let url = http.baseUrl + 'login?json=1';
		let data = {verifyCode: this.state.verifyCode, userName:  this.state.phone, loginType: 1};
		if (!(/^1\d{10}$/.test(this.state.phone))){
			Alert.alert('提示', '您填写的手机号码不正确！', [{text: '确定'}]);
		}else if ((!/^\d{6}$/.test(this.state.verifyCode))){
			Alert.alert('提示', '您填写的验证码不正确！', [{text: '确定'}]);
		}else{
			http.get(url, 'post', data, (res)=>{
				global.storage.save({
					key: 'userInfo',
					rawData: {
						userInfo: res.userInfo,
						fabaoId: res.userInfo.fabaoId,
						accessToken: res.accessToken,
					}
				});				
				//Alert.alert('dd', JSON.stringify(res));
				this.props.navigator.push({initProps: {userInfo: res.userInfo}, moduleName: 'Home', switchWay: 'FadeAndroid', component: Home});
			});
		}
	},
});

module.exports = Login;