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
			dataSource: this.ds.cloneWithRows([{exchangeDate: '', picUrl: '', score: '', status: '', subTitle: '', ticketNo: '', title: ''}, {exchangeDate: '', picUrl: '', score: '', status: '', subTitle: '', ticketNo: '', title: ''}]),
		}
    }    
	   
	render() {
        return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={data=>(
					<View style={[BaseStyles.listLi, BaseStyles.bgWhite, BaseStyles.frow, BaseStyles.p6]}>
						<Image source={{uri: data.picUrl}} 
						   style={[BaseStyles.listImg,]} />
					    <View style={[BaseStyles.rListCont, BaseStyles.ml10]}>
							<Text style={[BaseStyles.c6,BaseStyles.f12]}>{data.title}</Text>
							<View style={[BaseStyles.mt6, BaseStyles.flex1, BaseStyles.frow, BaseStyles.dhInfo]}>
								<Text style={[BaseStyles.c6,BaseStyles.f12, ]}>兑换码：{data.ticketNo}</Text>
								<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
									<Text style={[BaseStyles.aColor, BaseStyles.f12]}>{data.score} </Text>	
									<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 10, width: 10,}]} />	
								</View>
						    </View>
							<View style={[BaseStyles.mt10, BaseStyles.frow, BaseStyles.vCenter,]}>
								<Text style={[BaseStyles.aColor, BaseStyles.f12]}>{data.status}　　</Text>
								<Text style={[BaseStyles.c9, BaseStyles.f10]}>{data.exchangeDate}</Text>
						    </View>
					    </View>
					</View>
				)}
			/>
		);
    }
	
	componentWillMount(){
		let url = http.baseUrl + 'mall/changeList?json=1&pageNow=1&pageSize=10';
		global.storage.load({
			key: 'userInfo',			
		}).then(res => {
			let data = {pageNow: 1, pageSize: 10};		
			http.get(url, 'post', data, (ress)=>{
				this.setState({dataSource: this.ds.cloneWithRows(ress.result)});
			},err=>{Alert.alert('提示', '请求错误！', [{text: '确定'}])});
		});					
	}
}


module.exports = ChangeList;