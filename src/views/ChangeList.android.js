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
					<View style={[BaseStyles.listLi, BaseStyles.bgWhite, BaseStyles.frow, BaseStyles.p6]}>
						<Image source={{uri: 'http://fbimages.oss.aliyuncs.com/lawyercard/2015/12/01/F1E4B65BF051710D865E80CBBE0E4616.png'}} 
						   style={[BaseStyles.listImg,]} />
					    <View style={[BaseStyles.rListCont, BaseStyles.ml10]}>
							<Text style={[BaseStyles.c6,BaseStyles.f12]}>一号专车优惠券</Text>
							<View style={[BaseStyles.mt6, BaseStyles.flex1, BaseStyles.frow, BaseStyles.dhInfo]}>
								<Text style={[BaseStyles.c6,BaseStyles.f12, ]}>兑换码：yhzc124324234326</Text>
								<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
									<Text style={[BaseStyles.aColor, BaseStyles.f12]}>500 </Text>	
									<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 10, width: 10,}]} />	
								</View>
						    </View>
							<View style={[BaseStyles.mt10, BaseStyles.frow, BaseStyles.vCenter,]}>
								<Text style={[BaseStyles.aColor, BaseStyles.f12]}>兑换成功　　</Text>
								<Text style={[BaseStyles.c9, BaseStyles.f10]}>2016年01月27日</Text>
						    </View>
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