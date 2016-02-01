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
	Login,
	Detail,
	Home,
} from './src/utils/BaseModules';

import Storage from 'react-native-storage';
let storage = new Storage({
	defaultExpires: 1000 * 3600 * 24 * 10,	
});

global.storage = storage;

let _navigator;

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator && _navigator.getCurrentRoutes().length > 1) {
    _navigator.pop();
    return true;
  }
  return false;
});


class PointsMall extends Component {

	constructor(props){
		super(props);
	}

	render(){
        let initialRoute = {initProps: {}, moduleName: 'Home', switchWay: 'no', component: Home};		
		return (
			<Navigator
                style = {BaseStyles.container}
                initialRoute = {initialRoute}
				configureScene={(route)=>{
					if (route.switchWay != ''){
						return Navigator.SceneConfigs[route.switchWay];//FadeAndroid FloatFromRight PushFromRight FloatFromBottom HorizontalSwipeJump
					}else{
						return Navigator.SceneConfigs.FadeAndroid;
					}
				}}
                renderScene={(route, navigator)=>{					
					let Component = route.component;					
					_navigator = navigator;
					if (Component){
						return <Component {...route} navigator={_navigator} />
					}
				}}
             />
		);
	}
}

AppRegistry.registerComponent('PointsMall', () => PointsMall);
