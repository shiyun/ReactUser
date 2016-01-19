'use strict';

import React, {
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity,
  Dimensions,
  ListView,
  Component,
} from 'react-native';

import ViewPager, {} from 'react-native-viewpager';
const styles = require('../styles/styles.js');

var IMGS = [
  {img:'https://images.unsplash.com/photo-1441742917377-57f78ee0e582?h=640',txt:'one',},
  {img:'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=640',txt:'two',},
  {img:'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=640',txt:'three',},
  {img:'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=640',txt:'four',},
  {img:'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=640',txt:'five',},
  {img:'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=640',txt:'six',},
  {img:'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=640',txt:'seven',},
];

let localData = [
	{tit: '推荐', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的'},
	{tit: '热门', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的'},
	{tit: '推荐2', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的'},
	{tit: '热门2', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的'},
];

let localData2 = [
	{tit: '证券交易纠纷', txt: '证券交易纠纷',img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '创业法律咨询', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的', img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '证券交易纠纷', txt: '证券交易纠纷',img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '创业法律咨询', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的', img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '证券交易纠纷', txt: '证券交易纠纷',img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '创业法律咨询', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的', img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '证券交易纠纷', txt: '证券交易纠纷',img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
	{tit: '创业法律咨询', txt: '一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的一个迭代器对象也可以实现可选的', img: 'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=40'},
];

class TopScreen extends Component{
    constructor(props){
        super(props);
        var dataSource = new ViewPager.DataSource({
          pageHasChanged: (p1, p2) => p1 !== p2,
        });
        this.state = {
            dataSource : dataSource.cloneWithPages(IMGS),
            dataSource2 : dataSource.cloneWithPages(localData),
            curLine : 0,
        } 
    }    
	   
    _renderPage(
        data: Object,
        pageID: number | string,) {

        return (        
              <Image
                source={{uri: data.img}}
                style={styles.pageImg} />
        );
    }    
	 
    _renderPage2(
        data: Object,
        pageID: number | string,) {

        return (        
              <TouchableOpacity onPress={()=>this._openUrl(pageID)} style={styles.tjTxtWrap}>
				<View style={styles.tjIconWrap}><Text style={styles.tjIcon}>{data.tit}</Text></View>
				<Text style={styles.tjTxt} numberOfLines={1}>{data.txt}</Text>
              </TouchableOpacity>
        );
    }    
	
	_openUrl(url: string,){
		
	}
	
	_onPressAlert(){
		//Alert.alert('ts', '123');
		this.props.navigator.push({initProps: {}, moduleName: 'Detail', pageIndex: '2', switchWay: 'FadeAndroid', component: (<Detail {...this.props} />),});
	}

	render() {
        return (
            <View>
				<ViewPager
					style={this.props.style}
					dataSource={this.state.dataSource}
					renderPage={this._renderPage}
					isLoop={true}
					autoPlay={true}
					renderPageIndicator={false}
					onChangePage={(pageID)=>this.setState({curLine: pageID})}
				/>			
				<View style={styles.lineStyleWrap}>
					{
						IMGS.map((v, i) => <View key={'key-'+i} style={[styles.lineStyle, this.state.curLine == i ? styles.lineStyleCur : null]}></View> )
					}
				</View>
				<View style={styles.section2}>
					<Image style={styles.fsqIcon} source={require('../imgs/lawcircle.png')} />
					<View style={styles.txtScreen}>
						<ViewPager
							style={styles.txtScreen}
							dataSource={this.state.dataSource2}
							renderPage={this._renderPage2}
							isLoop={true}
							autoPlay={true}
							renderPageIndicator={false}
						/>
					</View>
				</View>
				<View style={styles.section3}>
					<View style={styles.section3Item}>
						<TouchableOpacity>
							<Image style={styles.section3Img} source={require('../imgs/logo.png')} />
						</TouchableOpacity>
					</View>
					<View style={styles.section3Item}>
						<TouchableOpacity>
							<Image style={styles.section3Img} source={require('../imgs/logo.png')} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{backgroundColor: '#eee'}}>
					<View style={{marginTop:6, flex:1, flexDirection: 'row', borderTopWidth: .5,borderTopColor: '#ddd',borderBottomWidth: .5,borderBottomColor: '#ddd', backgroundColor: '#fff', paddingTop: 3, paddingBottom: 3,}}>
						<Image style={{height:16,width:16,marginTop:2,marginLeft:6,}} source={require('../imgs/homehot.png')} />
						<Text style={{color: '#6796E4', fontSize: 14,marginLeft:6,marginRight:6,}}>热门咨询</Text>
						<Text style={{color: '#666', fontSize: 10,marginTop:3,}}>老百姓最关心的法律问题</Text>
					</View>
				</View>
				<View style={{backgroundColor: 'white', flex:1, flexDirection: 'row', flexWrap: 'wrap', }}>
					{
						localData2.map((k, v)=>(
							<TouchableOpacity key={'key-'+v} style={{marginLeft:-1, height:60, width: (Dimensions.get('window').width)/2+1, paddingLeft: 10, paddingBottom: 10, borderBottomWidth: .5, borderBottomColor: '#ddd',borderLeftWidth: .5, borderLeftColor: '#ddd', }} onPress={this._onPressAlert}>
								<View style={{flex:1, flexDirection: 'row',}}>
									<View style={{marginTop:6,width: 100,}}><Text style={{fontSize: 12, color: '#333',}}>{k.tit}</Text><Text numberOfLines={2} style={{marginTop:4,fontSize: 10,lineHeight:14, color: '#999',}}>{k.txt}</Text></View>
									<Image style={{height:36,width:36,marginTop:11,marginLeft:6,}} source={{uri: k.img}} />
								</View>
							</TouchableOpacity>
						))
					}
				</View>
			</View>
        );
    }

}

module.exports = TopScreen;