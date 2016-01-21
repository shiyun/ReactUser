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
	Home,
	HomeCont,
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
	}

	render(){
        let initialRoute = {initProps: {}, moduleName: 'HomeCont', pageIndex: '0', switchWay: 'HorizontalSwipeJump', component: HomeCont};
		
		return (
			<Navigator
                style = {BaseStyles.container}
                initialRoute = {initialRoute}
                configureScene={this._configureSceneAndroid}
                renderScene={(route, navigator)=>{
					let Component = route.component;
					_navigator = navigator;
					if (Component){
						return <Component {...route.params} navigator={_navigator} />
					}
				}}
             />
		);
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
