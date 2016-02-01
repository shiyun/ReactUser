'use strict';

var React = require('react-native');
var {
  AppRegistry,
  Text,
  Image,
  TextInput,
  View,
  Alert,
  Animated,  
  ToolbarAndroid,
  TouchableOpacity,
  ScrollView,
  ListView,
} = React;

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

import BaseModules, {
	Launch,
	Home,
} from '../utils/BaseModules';

let testData = [{"img": "../imgs/logo.png", "desc":"图片1"}, {"img": "../imgs/logo.png", "desc":"图片2"}, {"img": "../imgs/logo.png", "desc":"图片3"}, {"img": "../imgs/logo.png", "desc":"图片4"}, {"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},{"img": "../imgs/logo.png", "desc":"图片1"},];
let htData = [{'id': 'A1443436261391', 'type':'婚姻家庭', 'name': '离婚起诉书', 'time': '2015-09-28 20:11:33', 'index': 0},{'id': 'B1443436261391', 'type':'创业合同', 'name': '创业合同书', 'time': '2015-09-28 20:11:33', 'index': 1},{'id': 'A1443436261391', 'type':'婚姻家庭', 'name': '离婚起诉书', 'time': '2015-09-28 20:11:33', 'index': 2},{'id': 'B1443436261391', 'type':'创业合同', 'name': '创业合同书', 'time': '2015-09-28 20:11:33', 'index': 3},{'id': 'A1443436261391', 'type':'婚姻家庭', 'name': '离婚起诉书', 'time': '2015-09-28 20:11:33', 'index': 4},{'id': 'B1443436261391', 'type':'创业合同', 'name': '创业合同书', 'time': '2015-09-28 20:11:33', 'index': 5},];

var Login = React.createClass({
  getInitialState: function(){
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
        bounceValue: new Animated.Value(.8),
        dataSource: ds.cloneWithRows(htData),
        switchWay: '',
    }
  },
  componentDidMount: function(){
    Animated.timing(
        this.state.bounceValue, {toValue: 1, duration: 1000}
    ).start();
    this.setState({switchWay: this.props.switchWay});
  },
  onPressLogin: function(){
    this.props.navigator.push({
        name: 'home'
    });
  },
  onPressBack: function(){
    this.props.navigator.pop();
  },
  toWriteContract: function(){
    this.props.navigator.push({
        name: 'home'
    });
  },
  toViewCoutract: function(ccid: number){
	this.props.navigator.push({
       initProps: {}, moduleName: 'Home', pageIndex: '0', switchWay: 'FadeAndroid', component: Home
    });
  },
  _onEndReached: function(){
    Alert.alert('d', 'ddd');
  },
  renderRow: function(data){
    return (
        <TouchableOpacity style={BaseStyles.imgWrap} index={data.index} onPress={()=>this.toViewCoutract(data.index)}>            
            <View style={BaseStyles.hdid}><Text style={BaseStyles.listfont}>合同ID：</Text><Text style={BaseStyles.listfont}>{data.id}</Text><View style={BaseStyles.toDetail}></View></View>
            <View style={BaseStyles.hdtype}><Text style={BaseStyles.listfont}>合同分类：</Text><Text style={BaseStyles.hdtype2, BaseStyles.listfont, BaseStyles.listfont2}>{data.type}</Text></View>
            <View style={BaseStyles.hdtype}><Text style={BaseStyles.listfont}>合同名称：</Text><Text style={BaseStyles.hdtype2, BaseStyles.listfont, BaseStyles.listfont2}>{data.name}</Text></View>
            <View style={BaseStyles.hdtype}><Text style={BaseStyles.listfont}>编辑时间：</Text><Text style={BaseStyles.hdtype2, BaseStyles.listfont}>{data.time}</Text></View>
        </TouchableOpacity>    
    );
  },
  render: function() {
    return (
        <View style={BaseStyles.loginWrap}>
            <View style={BaseStyles.header}>
                <TouchableOpacity style={BaseStyles.toBack} onPress={this.onPressBack}>

                </TouchableOpacity>
                <Text style={BaseStyles.title}>口袋合同</Text>
            </View>
            <ListView
              style={BaseStyles.list}
              dataSource={this.state.dataSource}
              renderRow={this.renderRow}
              onEndReachedThreshold={30}
              onEndReached={this._onEndReached}
            />
            <TouchableOpacity style={BaseStyles.buttonWrap}>
                <View style={BaseStyles.buttonInner}><Text style={BaseStyles.button} onPress={this.toWriteContract}>我要写合同</Text></View>
            </TouchableOpacity>
        </View>
    );
  },
  onActionSelected: function(position) {
      if (position === 0) { // index of 'Settings'
        
      }
  }
});

/*
var styles = StyleSheet.create({
  container: {
      flex:1,
  },  
  inputWrap: {
    width: wWidth,
    padding: 10,
  },
  buttonWrap: {
    width: wWidth,
    padding: 10,
    backgroundColor: '#fff',
  },
  buttonInner: {
    height: 30,
    width: wWidth-20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: comStyle.bColor,
  },
  button: {
    textAlign: 'center',
    color: '#fff',
  },
  list: {
    paddingTop: 10,
    marginBottom: 10,
  },
  imgWrap: {
    width: wWidth,
    borderBottomColor: comStyle.borderColor,
    borderBottomWidth: .5,
    borderTopColor: comStyle.borderColor,
    borderTopWidth: .5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  listfont: {
    fontSize: 14,
    color: '#999',
  },
  listfont2: {
    color: '#666',
  },
  hdid: {
    borderBottomColor: comStyle.borderColor,
    borderBottomWidth: .5,
    paddingBottom: 10,
    marginBottom: 10,
    flexDirection: 'row',  
  },
  hdtype: {
    flexDirection: 'row',  
  },
  header: {
    backgroundColor: comStyle.bColor,
    height: 40,
    alignItems: 'center',
  },
  title: {
    color: '#fff',  
    fontSize: 20,
    height: 40,
    marginTop: 5,
  },
  toBack: {
    borderLeftColor: '#fff',  
    borderTopColor: '#fff',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    height: 15,
    width: 15,
    position: 'absolute',
    left: 10,
    top: 12,
    transform: [{rotate: '-45deg'}],
  },
  toDetail: {
    borderLeftColor: comStyle.borderColor,  
    borderTopColor: comStyle.borderColor,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    height: 10,
    width: 10,
    position: 'absolute',
    right: 10,
    top: 5,
    transform: [{rotate: '135deg'}],
  },
});
*/
module.exports = Login;