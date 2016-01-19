'use strict';

import React, {
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const comStyle = {
    bColor: '#6796E4',
    borderColor: '#ddd',
	launchBgColor: '#C41C2B',
};

const styles = StyleSheet.create({
  containers: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#F3F4F8',
  },
  loginWrap: {
      flex:1,
  },  
  header: {
    backgroundColor: '#6796E4',
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
  pager: {
    flex: 1,    
  },
  pageImg: {
    width: wWidth,  
    height: 100, 
  },
  launch: {
	flex: 1,
	height: wHeight,
    width: wWidth,
	alignItems: 'center',
	marginTop: -24,
	backgroundColor: comStyle.launchBgColor, 
  },
  launchImg: {
	flex: 1,
    resizeMode: 'contain',
  },
  loading: {
    position: 'absolute',
    left: wWidth/2-40,
    bottom: 36,
  },
  lineStyleWrap: {
	flex: 1,
	flexDirection: 'row',
  },
  lineStyle: {
	flex: 1,
	height: 1,
    backgroundColor: '#ccc',
  },
  lineStyleCur: {
    backgroundColor: '#ff0',
  },
  section2: {
	flex: 1,
	flexDirection: 'row',
    borderBottomWidth: .5,
    borderBottomColor: comStyle.borderColor,
	paddingTop: 5,
	paddingBottom: 5,
  },
  fsqIcon: {
	marginLeft: 6,
	marginRight: 6,
	height: 20,
	width: 40,
	resizeMode: 'contain',
  },
  txtScreen: {
	paddingLeft: 6,
	paddingRight: 6,
	borderLeftWidth: .5,
	borderLeftColor: comStyle.borderColor,
	height: 20,
	flex:1,
	flexDirection: 'column',
  },
  tjTxtWrap: {
	flex: 1,
	flexDirection: 'row',
  },
  tjIconWrap: {
	paddingLeft: 6,
	paddingRight: 6,
	paddingTop: 2,
	paddingBottom: 2,
	marginRight: 6,
	borderRadius: 4,	
	borderWidth: .5,	
	borderColor: '#f00',
  },
  tjIcon: {
	color: 'red',
	fontSize: 12,
  },
  tjTxt: {
	flex: 1,
	borderWidth: .5,	
	borderColor: '#ff0',
	fontSize: 12,
	marginTop: 2,
	marginBottom: 2,
  },
  section3: {
	flex: 1,
	flexDirection: 'row',
    borderBottomWidth: .5,
    borderBottomColor: comStyle.borderColor,
	paddingRight: 5,
	paddingTop: 5,
	paddingBottom: 5,
  },
  section3Item: {
	flex: 1,
	marginLeft: 6,	
	alignItems: 'center',
	borderRadius: 6,
    backgroundColor: '#ccc',
	overflow: 'hidden',
  },
  section3Img: {
	height:100,
	width: 150,
	borderRadius: 6,
  },
});


module.exports = styles;