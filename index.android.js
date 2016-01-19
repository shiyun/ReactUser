'use strict';

import React, {
	AppRegistry,
	BackAndroid,
	Component,
	Navigator,
	StyleSheet,
	View,
} from 'react-native';

import BaseUtils, {
	BaseStyles,
} from './src/utils/BaseUtils';

import BaseModules, {
	Launch,
	Detail,
} from './src/utils/BaseModules';

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});


class ReactUser extends Component {

	constructor(props){
		super(props);
		this.initProps = {};
		this.moduleName = 'Launch';
		this.pageIndex = '0';
		this.switchWay = 'FadeAndroid';
		this.component = (<Launch {...this.props} />); 
	}

	render(){
        let initialRoute = {initProps: {}, moduleName: 'Launch', pageIndex: '0', switchWay: 'FadeAndroid', component: (<Launch {...this.props} />),};

		return (
			<Navigator
                style = {BaseStyles.container}
                initialRoute = {initialRoute}
                renderScene={this._renderSceneAndroid}
                configureScene={this._configureSceneAndroid}
             />
		);
	}

	_renderSceneAndroid(route, navigationOperations, onComponentRef){
        _navigator = navigationOperations;
		switch (route.name)
        {            
            case 'screen':
                return (
					<View style={{flex:1}}>
						<ListView style={BaseStyles.launchWrap} navigator={_navigator} route={route} dataSource={this.state.dataSource} renderRow={this._renderRow} />                        						
					</View>
                );
                break;
            case 'screen2':
                return (
					<TopScreen navigator={_navigator} route={route} style={BaseStyles.pager} />
                );
                break;
            case 'login':
               console.log(route.routerIndex);
                return (<Login navigator={_navigator} route={route} />);
                break;
            case 'home':
               return (<Home navigator={_navigator} route={route} />);
               break;
            case 'launch':
               return (<Launch navigator={_navigator} route={route} style={BaseStyles.launch} />);
               break;
            case 'thumb':
               return (<Apps navigator={_navigator} route={route} />);
               break;
         } 
	}

	_configureSceneAndroid(route){
		if (route.switchWay == 'no'){
			return null;
		}else if(route.switchWay == ''){
			return Navigator.SceneConfigs.HorizontalSwipeJump;
		}else{
			return Navigator.SceneConfigs[route.switchWay];//FadeAndroid FloatFromRight PushFromRight FloatFromBottom HorizontalSwipeJump
		}
	}
}

AppRegistry.registerComponent('ReactUser', () => ReactUser);
