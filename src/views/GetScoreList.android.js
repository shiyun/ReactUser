'use strict';

import React, {
  Alert,
  Component,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

import BaseModules, {

} from '../utils/BaseModules';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

import HttpService from '../utils/service';
const http = new HttpService();

const locData = {
	iconCoin: require('../images/perCount.png'),
}

class ChangeList extends Component{
    constructor(props){
        super(props); 
		
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				
		this.state = {
			dataSource: ds.cloneWithRows(Array.from({length:20})),
		}
    }    
	   
	render() {
        return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={rowData=>(
					<View style={[BaseStyles.listLi, BaseStyles.bgWhite, BaseStyles.p6]}>
						<View style={[BaseStyles.scoreWrap, BaseStyles.ml10, BaseStyles.vCenter, BaseStyles.frow, BaseStyles.mr10]}>
							<View style={[BaseStyles.scoreLeft,]}>
								<Text style={[BaseStyles.aColor, BaseStyles.f14, BaseStyles.c6, ]}>积分类型：<Text style={[BaseStyles.c3]}>兑换失败退分</Text></Text>
								<Text style={[BaseStyles.aColor, BaseStyles.f14,  BaseStyles.c6, BaseStyles.mt6]}>积分详情：<Text style={[BaseStyles.c3]}>积分商城专用</Text></Text>
							</View>	
							<Text style={[BaseStyles.scoreRight, BaseStyles.aColor, BaseStyles.f14]}>+3</Text>
						</View>	
						<View style={[BaseStyles.scoreDateWrap, BaseStyles.mr10, BaseStyles.ml10]}>
							<Text style={[BaseStyles.c9, BaseStyles.f12]}>2016-01-27 15:24:39</Text>
						</View>	
					</View>
				)}
			/>
		);
    }
	
	componentWillMount(){
		let url = http.baseUrl + 'mall/changeList?pageNow=1&pageSize=10';
		global.storage.load({
			key: 'userInfo',			
		}).then(res => {
			//Alert.alert('dd',JSON.stringify(res))	
			//let data = {accessToken: res.accessToken};		
			//http.get(url, 'post', data, (ress)=>{
			//	Alert.alert('dd', JSON.stringify(ress));
				//this.props.navigator.push({initProps: {}, moduleName: 'Home', switchWay: 'FadeAndroid', component: Home});
			//});
		});					
	}
}


module.exports = ChangeList;