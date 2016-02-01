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
	ChangeList,
	Detail,
	Category,
} from '../../utils/BaseModules';

import BaseUtils, {
    BaseStyles,
} from '../../utils/BaseUtils';

import ViewPager, {} from 'react-native-viewpager';
import HttpService from '../../utils/service';
const http = new HttpService();

const locData = {
	iconCoin: require('../../images/perCount.png'),
	iconDh: require('../../images/myRecord.png'),
	category0: require('../../images/category_0.png'),
	category1: require('../../images/category_1.png'),
	category2: require('../../images/category_2.png'),
	category3: require('../../images/category_3.png'),
	category4: require('../../images/category_4.png'),
	category8: require('../../images/category_8.png'),
	categoryDraw: require('../../images/category_draw.png'),
	categoryNew: require('../../images/category_new.png'),
	categoryBmfw: require('../../images/bianlishenghuo.png'),
}

class Home extends Component{
    constructor(props){
        super(props); 
		
		this.ds = new ViewPager.DataSource({
		  pageHasChanged: (p1, p2) => p1 !== p2,
		});
				
		this.state = {
			viewPage: this.ds.cloneWithPages([]),
			productCategories: [],			
			integral: 0,			
		}
    }    
	   
	render() {		
        return (
			<ScrollView
			automaticallyAdjustContentInsets={false}
			horizontal={false}
			style={BaseStyles.home}>
				<ViewPager
						style={BaseStyles.loginWrap}
						dataSource={this.state.viewPage}
						renderPage={this._renderPage}
						isLoop={true}
						autoPlay={true}												
					/>	

				<View style={[BaseStyles.countInfoWrap,BaseStyles.frow,BaseStyles.flex1,]}>
					<View style={[BaseStyles.flex1,BaseStyles.frow,BaseStyles.vCenter,BaseStyles.hCenter,]}>
						<Image source={locData.iconCoin} style={[BaseStyles.iconCoin,]} />	
						<Text style={[BaseStyles.c6, BaseStyles.f12, BaseStyles.ml6]}>积分 <Text style={[BaseStyles.aColor]}>{this.state.integral}</Text></Text>
					</View>
					<View style={[BaseStyles.flex1,BaseStyles.frow,]}>
						<TouchableOpacity style={[BaseStyles.flex1,BaseStyles.frow,BaseStyles.vCenter,BaseStyles.hCenter,]} onPress={this._goChangeList.bind(this)}>
							<Image source={locData.iconDh} style={[BaseStyles.iconDh]} />	
							<Text style={[BaseStyles.c6, BaseStyles.f12, BaseStyles.ml6]}>兑换记录</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={[BaseStyles.sectionTit,BaseStyles.flex1,BaseStyles.vCenter,BaseStyles.mt14,]}>
					<View style={[BaseStyles.titLine,BaseStyles.wWidth]}></View>
					<Text style={[BaseStyles.hTit, BaseStyles.c6, BaseStyles.f12,]}>热门商品</Text>
				</View>
				
				<View style={[BaseStyles.sectionCont,BaseStyles.flex1,BaseStyles.frow,BaseStyles.mt6,]}>
					<View style={[BaseStyles.sectionContent, BaseStyles.flex1,]}>
						<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
						<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
						<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
							<Text style={[BaseStyles.aColor,]}>0 </Text>	
							<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
						</View>
						<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/21/D5EFC142186F9F00343CDDBE082E231F.png'}} style={[BaseStyles.leftImg,BaseStyles.mb6]} />
					</View>
					<View style={[BaseStyles.sectionContent, BaseStyles.flex1, BaseStyles.fcolumn, BaseStyles.p0, ]}>
						<View style={[BaseStyles.flex1,BaseStyles.btop,]}>
							<View style={[BaseStyles.m6,BaseStyles.flex1,BaseStyles.frow, ]}>
								<View style={[BaseStyles.flex1,  ]}>
									<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
									<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
									<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
										<Text style={[BaseStyles.aColor,]}>0 </Text>	
										<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
									</View>
								</View>
								<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/30/B85442A84D2F6802C48A1B4218776FB9.png'}} style={[BaseStyles.leftImg2, BaseStyles.mb6, ]} />
							</View>
						</View>						

						<View style={[BaseStyles.flex1,BaseStyles.btop,]}>
							<View style={[BaseStyles.m6,BaseStyles.flex1,BaseStyles.frow, ]}>
								<View style={[BaseStyles.flex1,  ]}>
									<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
									<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
									<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
										<Text style={[BaseStyles.aColor,]}>0 </Text>	
										<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
									</View>
								</View>
								<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/30/B85442A84D2F6802C48A1B4218776FB9.png'}} style={[BaseStyles.leftImg2, BaseStyles.mb6, ]} />
							</View>
						</View>						
					</View>
				</View>
				
				<View style={[BaseStyles.flex1, BaseStyles.sectionService, BaseStyles.frow, BaseStyles.mt6, BaseStyles.mb6,]}>
					{
						this.state.productCategories.map((v, k)=>(
							<View key={v.id} style={[BaseStyles.serviceCell, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.mt6, BaseStyles.mb6,]} id={v.id}>
								<TouchableOpacity style={[BaseStyles.hCenter, BaseStyles.vCenter]} activeOpacity={.5} onPress={this._goCategory.bind(this, v.id)}>
									<Image source={{uri: v.logoUrl}} style={[BaseStyles.cellImg ]} />
									<Text style={[BaseStyles.f10, BaseStyles.c6]}>{v.name}</Text>
								</TouchableOpacity>
							</View>	
						))
					}					
				</View>

				<View style={[BaseStyles.sectionTit,BaseStyles.flex1,BaseStyles.vCenter,BaseStyles.mt14,]}>
					<View style={[BaseStyles.titLine,BaseStyles.wWidth]}></View>
					<Text style={[BaseStyles.hTit, BaseStyles.c6, BaseStyles.f12,]}>精品推荐</Text>
				</View>
				
				<View style={[BaseStyles.bgWhite, BaseStyles.proWrap, BaseStyles.frow, BaseStyles.mt6]}>
					<TouchableOpacity style={[BaseStyles.proCell,]} activeOpacity={.5} onPress={this._goDetail.bind(this)}>
						<View style={[BaseStyles.m6,BaseStyles.flex1,]}>
							<View style={[BaseStyles.flex1,  ]}>
								<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
								<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
								<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
									<Text style={[BaseStyles.aColor,]}>0 </Text>	
									<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
								</View>
							</View>
							<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/30/B85442A84D2F6802C48A1B4218776FB9.png'}} style={[BaseStyles.proImg, BaseStyles.mb6, BaseStyles.mt6,]} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[BaseStyles.proCell,]} activeOpacity={.5} onPress={this._goDetail.bind(this)}>
						<View style={[BaseStyles.m6,BaseStyles.flex1,]}>
							<View style={[BaseStyles.flex1,  ]}>
								<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
								<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
								<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
									<Text style={[BaseStyles.aColor,]}>0 </Text>	
									<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
								</View>
							</View>
							<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/30/B85442A84D2F6802C48A1B4218776FB9.png'}} style={[BaseStyles.proImg, BaseStyles.mb6, BaseStyles.mt6,]} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[BaseStyles.proCell,]} activeOpacity={.5} onPress={this._goDetail.bind(this)}>
						<View style={[BaseStyles.m6,BaseStyles.flex1,]}>
							<View style={[BaseStyles.flex1,  ]}>
								<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
								<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
								<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
									<Text style={[BaseStyles.aColor,]}>0 </Text>	
									<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
								</View>
							</View>
							<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/30/B85442A84D2F6802C48A1B4218776FB9.png'}} style={[BaseStyles.proImg, BaseStyles.mb6, BaseStyles.mt6,]} />
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={[BaseStyles.proCell,]} activeOpacity={.5} onPress={this._goDetail.bind(this)}>
						<View style={[BaseStyles.m6,BaseStyles.flex1,]}>
							<View style={[BaseStyles.flex1,  ]}>
								<Text style={[BaseStyles.c9,BaseStyles.f8,BaseStyles.line14,BaseStyles.mt3,]}>给你一份冬季的守候</Text>
								<Text style={[BaseStyles.c6,BaseStyles.f10,BaseStyles.line14,]}>一号专车5元优惠券</Text>
								<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
									<Text style={[BaseStyles.aColor,]}>0 </Text>	
									<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
								</View>
							</View>
							<Image source={{uri: 'http://release-fbimages.oss.aliyuncs.com/lawyercard/2015/12/30/B85442A84D2F6802C48A1B4218776FB9.png'}} style={[BaseStyles.proImg, BaseStyles.mb6, BaseStyles.mt6,]} />
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		);
    }
	
	componentWillMount(){
		let url = http.baseUrl + 'mall?json=1';
		global.storage.load({
			key: 'userInfo',			
		}).then(res => {
			let data = {accessToken: res.accessToken};	
				//Alert.alert('dds', JSON.stringify(res));
			http.get(url, 'post', data, (ress)=>{
				const result = ress.result;	
				
				this.setState({
					viewPage: this.ds.cloneWithPages(result.carouselPic),
					productCategories: result.productCategories,
					integral: result.integral,
				});
				//Alert.alert('ddc', JSON.stringify(ress));
				//this.props.navigator.push({initProps: {}, moduleName: 'Home', switchWay: 'FadeAndroid', component: Home});
			});
		},err => {Alert.alert('cc', err)});					
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
	
	_goChangeList(){
		this.props.navigator.push({initProps: {}, moduleName: 'ChangeList', switchWay: 'FadeAndroid', component: ChangeList});
	}

	_goDetail(){
		this.props.navigator.push({initProps: {}, moduleName: 'Detail', switchWay: 'FadeAndroid', component: Detail});
	}

	_goCategory(id: number){
		this.props.navigator.push({initProps: {cateId: id}, moduleName: 'Category', switchWay: 'FadeAndroid', component: Category});
	}

}


module.exports = Home;