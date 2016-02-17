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
		
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
				
		this.state = {
			dataSource: this.ds.cloneWithRows([{function_name: '', type_name: '', add_time: '', score_in: 0},{function_name: '', type_name: '', add_time: '', score_in: 0}]),
		}
    }    
	   
	render() {
        return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={(data)=>(<View style={[BaseStyles.listLi, BaseStyles.bgWhite, BaseStyles.p6]}>
						<View style={[BaseStyles.scoreWrap, BaseStyles.ml10, BaseStyles.vCenter, BaseStyles.frow, BaseStyles.mr10]}>
							<View style={[BaseStyles.scoreLeft,]}>
								<Text style={[BaseStyles.aColor, BaseStyles.f14, BaseStyles.c6, ]}>积分类型：<Text style={[BaseStyles.c3]}>{data.function_name}</Text></Text>
								<Text style={[BaseStyles.aColor, BaseStyles.f14,  BaseStyles.c6, BaseStyles.mt6]}>积分详情：<Text style={[BaseStyles.c3]}>{data.type_name}</Text></Text>
							</View>	
							<Text style={[BaseStyles.scoreRight, BaseStyles.aColor, BaseStyles.f14]}>+ {data.score_in}</Text>
						</View>	
						<View style={[BaseStyles.scoreDateWrap, BaseStyles.mr10, BaseStyles.ml10]}>
							<Text style={[BaseStyles.c9, BaseStyles.f12]}>{data.add_time}</Text>
						</View>	
					</View>)}
			/>
		);
    }
	
	componentWillMount(){		
		let url = http.baseUrl + 'mall/getscoreList?json=1&pageNow=1&pageSize=10';

		global.storage.load({
			key: 'userInfo',			
		}).then(res => {
			let data = {pageNow: 1, pageSize: 10};		
			http.get(url, 'post', data, ress=>{
				//Alert.alert('ts', JSON.stringify(ress.result.recordInfo));

				this.setState({dataSource: this.ds.cloneWithRows(ress.result.recordInfo)});
			},err=>{Alert.alert('提示', '请求错误！', [{text: '确定'}])});
		});
	}
}


module.exports = ChangeList;
