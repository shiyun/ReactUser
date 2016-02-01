'use strict';

import React, {
  Alert,
  Component,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import BaseModules, {
	Detail,
} from '../utils/BaseModules';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

import ViewPager, {} from 'react-native-viewpager';

import HttpService from '../utils/service';
const http = new HttpService();

const locData = {
	iconCoin: require('../images/perCount.png'),
}

class Category extends Component{
    constructor(props){
        super(props); 

		this.ds = new ViewPager.DataSource({
		  pageHasChanged: (p1, p2) => p1 !== p2,
		});

		this.state = {
			viewPage: this.ds.cloneWithPages([]),
			plist: [],
		}

    }    
	   
	render() {
        return (
			<ScrollView	style={[BaseStyles.bgWhite]}>
				<ViewPager
						style={BaseStyles.loginWrap}
						dataSource={this.state.viewPage}
						renderPage={this._renderPage}
						isLoop={true}
						autoPlay={true}												
					/>

				<View style={[BaseStyles.category,BaseStyles.frow, BaseStyles.wWidth, BaseStyles.flex1]}>
				{
					this.state.plist.map((v, k)=>(
						<TouchableOpacity key={v.id} style={[BaseStyles.proCell,]} activeOpacity={.5} onPress={this._goDetail.bind(this, v.id)}>
							<View style={[BaseStyles.m6,BaseStyles.flex1,]}>
								<View style={[BaseStyles.flex1,  ]}>
									<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{v.title}</Text>
									<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{v.subTitle}</Text>
									<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
										<Text style={[BaseStyles.aColor,]}>{v.score} </Text>	
										<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
									</View>
								</View>
								<Image source={{uri: v.picUrl}} style={[BaseStyles.proImg, BaseStyles.mb6, BaseStyles.mt6,]} />
							</View>
						</TouchableOpacity>	
					))
				}
			</View>
			</ScrollView>
		);
    }
	
	componentWillMount(){
		const cateId = this.props.initProps.cateId;
		const url = http.baseUrl + 'mall/commodityList?json=1&categoryId='+cateId;
		
		global.storage.load({
			key: 'userInfo',			
		}).then(res => {
			let data = {accessToken: res.accessToken, categoryId: cateId};		
			http.get(url, 'post', data, ress=>{
				const result = ress.result;			
				this.setState({plist: result.productList, viewPage: this.ds.cloneWithPages(result.picUrls),});
			},err=>{Alert.alert('提示', JSON.stringify(err), [{text: '确定'}])});
			
		});					
	}

	_goDetail(id: number){
		this.props.navigator.push({initProps: {pid: id}, moduleName: 'Detail', switchWay: 'FadeAndroid', component: Detail});
	}

	_renderPage(
        data: Object,
        pageID: number | string,) {
        return (
              <Image
                source={{uri: data.picUrl}}
                style={[BaseStyles.pageImg, BaseStyles.wWidth]} />
        );
    }
}

module.exports = Category;