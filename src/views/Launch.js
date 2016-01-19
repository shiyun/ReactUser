'use strict';
import React, {
    View,
    Image,
    Animated,
} from 'react-native';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

import BaseModules, {
    Home,
} from '../utils/BaseModules';

class Launch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            launchimg: require('../imgs/launch.png'),
            loading: require('../imgs/loading.gif'),
            loadStatus: false,
            fadeAnim: new Animated.Value(1),
        }
    }

    render(){
        let loading = this.state.loadStatus ? null : (<Image source={this.state.loading} style={BaseStyles.loading} />);
        return(
			<View {...this.props} style={BaseStyles.launch}>
				<Animated.Image  
					 source={this.state.launchimg} 
					 style={[BaseStyles.launchImg, {opacity: this.state.fadeAnim}]}>
				</Animated.Image>
				{loading}
			</View>
        );
    }
    
    componentDidMount(){       
         
        fetch('http://kdnr.alpha.pocketlawyer.cn/openarticle/1')
            .then(res=>res.json())
            .then(res=>{
                console.log(res);
                setTimeout(()=>{
                    Animated.timing(          
                       this.state.fadeAnim,   
                       {toValue: 0, duration: 2000},   
                    ).start();
                    this.setState({loadStatus: true});
					this._goIndex();
                }, 1000);
            })
            .done();
        
    }

	_goIndex(){
		this.props.navigator.push({initProps: {}, moduleName: 'Home', pageIndex: '1', switchWay: 'FadeAndroid', component: Home});
	}
}

module.exports = Launch;