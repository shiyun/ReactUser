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
	Login,
	ChangeList,
	Detail,
	Category,
	GetScoreList,
	WebViewCont,
} from '../utils/BaseModules';

import BaseUtils, {
    BaseStyles,
	wWidth,
	wHeight,
} from '../utils/BaseUtils';

import ViewPager, {} from 'react-native-viewpager';
import HttpService from '../utils/service';
const http = new HttpService();

const locData = {
	iconCoin: require('../images/perCount.png'),
	iconDh: require('../images/myRecord.png'),
	category0: require('../images/category_0.png'),
	category1: require('../images/category_1.png'),
	category2: require('../images/category_2.png'),
	category3: require('../images/category_3.png'),
	category4: require('../images/category_4.png'),
	category8: require('../images/category_8.png'),
	categoryDraw: require('../images/category_draw.png'),
	categoryNew: require('../images/category_new.png'),
	categoryBmfw: require('../images/bianlishenghuo.png'),
	defaultpro: require('../images/defaultpro.png'),
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
			columns: [],
			popularProducts: [{id: 'no', picUrl: locData.defaultpro, title: '',subTitle: ''},{id: 'no', picUrl: locData.defaultpro, title: '',subTitle: ''},{id: 'no', picUrl: locData.defaultpro, title: '',subTitle: ''},],
		}
    }    
	
	render() {
		let hotpro;
		if (this.state.popularProducts[0].id == 'no'){
			hotpro = (
				<View style={[BaseStyles.sectionCont,BaseStyles.flex1,BaseStyles.frow,BaseStyles.mt6,]}>
					{
					<View style={[BaseStyles.sectionContent, BaseStyles.flex1,]}>
						<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{this.state.popularProducts[0].title}</Text>
						<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{this.state.popularProducts[0].subTitle}</Text>
						<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
							<Text style={[BaseStyles.aColor,]}>{this.state.popularProducts[0].score} </Text>	
							<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
						</View>
						<Image source={this.state.popularProducts[0].picUrl} style={[BaseStyles.leftImg,BaseStyles.mb6, BaseStyles.noLeftImg ]} />
					</View>
					}

					<View style={[BaseStyles.sectionContent, BaseStyles.flex1, BaseStyles.fcolumn, BaseStyles.p0, ]}>
					{
						<View style={[BaseStyles.flex1,BaseStyles.btop,]}>
							<View style={[BaseStyles.m6,BaseStyles.flex1,BaseStyles.frow, ]}>
								<View style={[BaseStyles.flex1,  ]}>
									<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{this.state.popularProducts[1].title}</Text>
									<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{this.state.popularProducts[1].subTitle}</Text>
									<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
										<Text style={[BaseStyles.aColor,]}>{this.state.popularProducts[1].score} </Text>	
										<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
									</View>
								</View>
								<Image source={this.state.popularProducts[1].picUrl} style={[BaseStyles.leftImg2, BaseStyles.mb6, BaseStyles.noLeftImg2]} />
							</View>
						</View>			
					}
					{
						<View style={[BaseStyles.flex1,BaseStyles.btop,]}>							
							<View style={[BaseStyles.m6,BaseStyles.flex1,BaseStyles.frow, ]}>
								<View style={[BaseStyles.flex1,  ]}>
									<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{this.state.popularProducts[2].title}</Text>
									<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{this.state.popularProducts[2].subTitle}</Text>
									<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
										<Text style={[BaseStyles.aColor,]}>{this.state.popularProducts[2].score} </Text>	
										<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
									</View>
								</View>
								<Image source={this.state.popularProducts[2].picUrl} style={[BaseStyles.leftImg2, BaseStyles.mb6, BaseStyles.noLeftImg2,]} />
							</View>
						</View>	
					}
					</View>
				</View>		
			);
		}else{
			hotpro = (
				<View style={[BaseStyles.sectionCont,BaseStyles.flex1,BaseStyles.frow,BaseStyles.mt6,]}>
					{
					<View style={[BaseStyles.sectionContent, BaseStyles.flex1,]}>
						<TouchableOpacity style={[BaseStyles.flex1 ]} onPress={this._goDetail.bind(this,this.state.popularProducts[0].id)}>
							<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{this.state.popularProducts[0].title}</Text>
							<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{this.state.popularProducts[0].subTitle}</Text>
							<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
								<Text style={[BaseStyles.aColor,]}>{this.state.popularProducts[0].score} </Text>	
								<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
							</View>
							<Image source={{uri: this.state.popularProducts[0].picUrl}} style={[BaseStyles.leftImg,BaseStyles.mb6]} />
						</TouchableOpacity>
					</View>
					}

					<View style={[BaseStyles.sectionContent, BaseStyles.flex1, BaseStyles.fcolumn, BaseStyles.p0, ]}>
					{
						<View style={[BaseStyles.flex1,BaseStyles.btop,]}>
							<TouchableOpacity style={[BaseStyles.flex1 ]} onPress={this._goDetail.bind(this,this.state.popularProducts[1].id)}>
								<View style={[BaseStyles.m6,BaseStyles.flex1,BaseStyles.frow, ]}>
									<View style={[BaseStyles.flex1,  ]}>
										<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{this.state.popularProducts[1].title}</Text>
										<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{this.state.popularProducts[1].subTitle}</Text>
										<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
											<Text style={[BaseStyles.aColor,]}>{this.state.popularProducts[1].score} </Text>	
											<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
										</View>
									</View>
									<Image source={{uri: this.state.popularProducts[1].picUrl}} style={[BaseStyles.leftImg2, BaseStyles.mb6, ]} />
								</View>
							</TouchableOpacity>
						</View>			
					}
					{
						<View style={[BaseStyles.flex1,BaseStyles.btop,]}>
							<TouchableOpacity style={[BaseStyles.flex1 ]} onPress={this._goDetail.bind(this,this.state.popularProducts[2].id)}>
								<View style={[BaseStyles.m6,BaseStyles.flex1,BaseStyles.frow, ]}>
									<View style={[BaseStyles.flex1,  ]}>
										<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{this.state.popularProducts[2].title}</Text>
										<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{this.state.popularProducts[2].subTitle}</Text>
										<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
											<Text style={[BaseStyles.aColor,]}>{this.state.popularProducts[2].score} </Text>	
											<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
										</View>
									</View>
									<Image source={{uri: this.state.popularProducts[2].picUrl}} style={[BaseStyles.leftImg2, BaseStyles.mb6, ]} />
								</View>
							</TouchableOpacity>
						</View>	
					}
					</View>
				</View>		
			);
		}

        return (
			<ScrollView
			automaticallyAdjustContentInsets={false}
			horizontal={false}
			style={BaseStyles.home}>
				<ViewPager
						style={BaseStyles.loginWrap}
						dataSource={this.state.viewPage}
						renderPage={this._renderPage.bind(this)}
						isLoop={true}
						autoPlay={true}												
					/>	

				<View style={[BaseStyles.countInfoWrap,BaseStyles.frow,BaseStyles.flex1,]}>
					<View style={[BaseStyles.flex1,BaseStyles.frow,BaseStyles.vCenter,BaseStyles.hCenter,]}>
						<TouchableOpacity style={[BaseStyles.flex1,BaseStyles.frow,BaseStyles.vCenter,BaseStyles.hCenter,]} onPress={this._goGetScoreList.bind(this)}>
							<Image source={locData.iconCoin} style={[BaseStyles.iconCoin,]} />	
							<Text style={[BaseStyles.c6, BaseStyles.f14, BaseStyles.ml6]}>积分 <Text style={[BaseStyles.aColor]}>{this.state.integral}</Text></Text>
						</TouchableOpacity>
					</View>
					<View style={[BaseStyles.flex1,BaseStyles.frow,]}>						
						<TouchableOpacity style={[BaseStyles.flex1,BaseStyles.frow,BaseStyles.vCenter,BaseStyles.hCenter,]} onPress={this._goChangeList.bind(this)}>
							<Image source={locData.iconDh} style={[BaseStyles.iconDh]} />	
							<Text style={[BaseStyles.c6, BaseStyles.f14, BaseStyles.ml6]}>兑换记录</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={[BaseStyles.sectionTit,BaseStyles.flex1,BaseStyles.vCenter,BaseStyles.mt14,]}>
					<View style={[BaseStyles.titLine,BaseStyles.wWidth]}></View>
					<Text style={[BaseStyles.hTit, BaseStyles.c6, BaseStyles.f14,]}>热门商品</Text>
				</View>
					
				{hotpro}
				
				<View style={[BaseStyles.flex1, BaseStyles.sectionService, BaseStyles.frow, BaseStyles.mt6, BaseStyles.mb6,]}>
					{
						this.state.productCategories.map((v, k)=>(
							<View key={v.id} style={[BaseStyles.serviceCell, BaseStyles.vCenter, BaseStyles.hCenter, BaseStyles.mt6, BaseStyles.mb6,]} id={v.id}>
								<TouchableOpacity style={[BaseStyles.hCenter, BaseStyles.vCenter]} activeOpacity={.5} onPress={this._goCategory.bind(this, v.id)}>
									<Image source={{uri: v.logoUrl}} style={[BaseStyles.cellImg ]} />
									<Text style={[BaseStyles.f12, BaseStyles.c6]}>{v.name}</Text>
								</TouchableOpacity>
							</View>	
						))
					}					
				</View>

				{
					this.state.columns.map((v, k)=>(
						<View key={'p-'+k}>
							<View style={[BaseStyles.sectionTit,BaseStyles.flex1,BaseStyles.vCenter,BaseStyles.mt14,]}>
								<View style={[BaseStyles.titLine,BaseStyles.wWidth]}></View>
								<Text style={[BaseStyles.hTit, BaseStyles.c6, BaseStyles.f14,]}>{v.title}</Text>
							</View>
							<View style={[BaseStyles.bgWhite, BaseStyles.proWrap, BaseStyles.frow, BaseStyles.mt6]}>
							{
								v.productList.map((v2, k2)=>(
									<TouchableOpacity key={v2.id} style={[BaseStyles.proCell,]} activeOpacity={.5} onPress={this._goDetail.bind(this, v2.id)}>
										<View style={[BaseStyles.m6,BaseStyles.flex1,]}>
											<View style={[BaseStyles.flex1,  ]}>
												<Text style={[BaseStyles.c9,BaseStyles.f10,BaseStyles.line14,BaseStyles.mt3,]}>{v2.title}</Text>
												<Text style={[BaseStyles.c6,BaseStyles.f12,BaseStyles.line14,]}>{v2.subTitle}</Text>
												<View style={[BaseStyles.frow,BaseStyles.vCenter,]}>
													<Text style={[BaseStyles.aColor,]}>{v2.score} </Text>	
													<Image source={locData.iconCoin} style={[BaseStyles.iconCoin, {height: 12, width: 12,}]} />	
												</View>
											</View>
											<Image source={{uri: v2.picUrl}} style={[BaseStyles.proImg, BaseStyles.mb6, BaseStyles.mt6,]} />
										</View>
									</TouchableOpacity>
								))
							}
							</View>
						</View>
					))
				}
				
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
					columns: result.columns,
				});
				if (result.popularProducts.length != 0){				
					this.setState({
						popularProducts: result.popularProducts,
					});
				}
				//Alert.alert('ds',JSON.stringify(this.state.popularProducts));
			});
		},err => {Alert.alert('提示', '请求错误，请重新登录！');this.props.navigator.push({initProps: {}, moduleName: 'Login', switchWay: 'FadeAndroid', component: Login});});					
	}
	
	_renderPage(
        data: Object,
        pageID: number | string,) {
        return (
			<TouchableOpacity onPress={this._bannerClick.bind(this,data)}>
              <Image
                source={{uri: data.picUrl}}
                style={[BaseStyles.pageImg, BaseStyles.wWidth]}				
			  />
			</TouchableOpacity>
        );
    }

	_bannerClick(data){
		if (data.linkType == '0'){
			this.props.navigator.push({initProps: {pid: data.id}, moduleName: 'Detail', switchWay: 'FadeAndroid', component: Detail});
		}else if(data.linkType == '1'){
			this.props.navigator.push({initProps: {url: data.link}, moduleName: 'WebView', switchWay: 'FadeAndroid', component: WebViewCont});
		}		
	}
	
	_goChangeList(){
		this.props.navigator.push({initProps: {}, moduleName: 'ChangeList', switchWay: 'FadeAndroid', component: ChangeList});
	}

	_goDetail(id){
		this.props.navigator.push({initProps: {pid: id}, moduleName: 'Detail', switchWay: 'FadeAndroid', component: Detail});
	}

	_goCategory(id: number){
		this.props.navigator.push({initProps: {cateId: id}, moduleName: 'Category', switchWay: 'FadeAndroid', component: Category});
	}

	_goGetScoreList(){
		this.props.navigator.push({initProps: {}, moduleName: 'GetScoreList', switchWay: 'FadeAndroid', component: GetScoreList});
	}

}


module.exports = Home;
