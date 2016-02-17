'use strict';
import React, {
    Component,
    View,
    Image,
	WebView,
} from 'react-native';

import BaseUtils, {
    BaseStyles,
} from '../utils/BaseUtils';

class WebViewCont extends Component{
    constructor(props){
        super(props);

		var DEFAULT_URL;
		if (this.props.initProps.url){
			DEFAULT_URL = this.props.initProps.url;
		}else{
			DEFAULT_URL	= 'http://app.pocketlawyer.cn/lawyerDownload.html';
		}
		this.state = {
			url: DEFAULT_URL,
		}
    }

    render(){		
		return(
			<WebView
			  ref={'webview'}
			  automaticallyAdjustContentInsets={false}
			  style={BaseStyles.webView}
			  url={this.state.url}
			  javaScriptEnabled={true}
			  domStorageEnabled={true}
			  onNavigationStateChange={this.onNavigationStateChange}
			  startInLoadingState={true}
			  scalesPageToFit={false}
			/>
        );
    }
}

module.exports = WebViewCont;