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
    TopScreen,
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
		let topScreen = this.state.loadStatus ? 
						(<TopScreen navigator={this.props.navigator} route={this.props.route} style={BaseStyles.pager} />) : 
						(<View style={BaseStyles.launch}>
							<Animated.Image  
								 source={this.state.launchimg} 
								 style={[BaseStyles.launchImg, {opacity: this.state.fadeAnim}]}>
							</Animated.Image>
							{loading}
						</View>);
        return(
			<View>
				{topScreen}
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
                }, 1000);
            })
            .done();
        
    }
}

module.exports = Launch;