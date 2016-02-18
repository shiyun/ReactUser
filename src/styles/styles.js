'use strict';

import React, {
  StyleSheet,
  Dimensions,
} from 'react-native';

const wWidth = Dimensions.get('window').width;
const wHeight = Dimensions.get('window').height;
const cStyle = {
    bColor: '#F0F0F0',
    borderColor: '#ccc',
	btnColor: '#FF8A01',
	btnColor2: '#6796e4',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: cStyle.bColor,
	},
	wHeight: {
		height: wHeight,
	},
	wWidth: {
		width: wWidth,
	},
	bgWhite: {
		backgroundColor: '#fff',
	},
	f8: {
		fontSize: 8,	
	},
	f10: {
		fontSize: 10,	
	},
	f12: {
		fontSize: 12,	
	},
	f14: {
		fontSize: 14,	
	},
	line14: {
		lineHeight: 14,
	},
	c3: {
		color: '#333',
	},
	c6: {
		color: '#666',
	},
	c9: {
		color: '#999',
	},
	aColor: {
		color: cStyle.btnColor,
	},
	btnColor2: {
		color: cStyle.btnColor2,
	},
	cwhite: {
		color: '#fff',
	},
	m6: {
		margin: 6,
	},
	mt3: {
		marginTop: 3,
	},
	mt6: {
		marginTop: 6,
	},
	mb6: {
		marginBottom: 6,
	},
	mr6: {
		marginRight: 6,
	},
	ml6: {
		marginLeft: 6,
	},
	ml10: {
		marginLeft: 10,
	},
	mr10: {
		marginRight: 10,
	},
	mt10: {
		marginTop: 10,
	},
	mb10: {
		marginBottom: 10,
	},
	m10: {margin: 10,},
	mt14: {
		marginTop: 14,
	},
	p0: {
		padding:0,
	},
	p6: {
		padding:6,
	},
	pl6: {
		paddingLeft: 36,
	},
	flex1: {
		flex: 1,
	},
	hCenter: {
		justifyContent: 'center',
	},
	vCenter: {
		alignItems: 'center',
	},
	frow: {
		flexDirection: 'row',
	},
	fcolumn: {
		flexDirection: 'column',
	},
	overLayer: {backgroundColor: 'rgba(0,0,0,.7)', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0,},
	noBorder: {borderTopWidth: 0,borderBottomWidth: 0,borderLeftWidth: 0,borderRightWidth: 0,},
	
	//loginWrap
	loginWrap: {
		alignItems: 'center',
		padding: 10,
		marginBottom: 10,
	},
	inpWrap: {
		marginBottom: 10,
		borderWidth: .5,
		borderColor: cStyle.borderColor,
		borderRadius: 4,
		backgroundColor: '#fff',
	},
	inpWrap2: {
		justifyContent: 'space-between',
		width: wWidth - 20,
	},
	loginInput: {
		height: 30,
		paddingLeft: 8,
		paddingRight: 8,
		paddingTop: 0,
		paddingBottom: 0,
		backgroundColor: 'rgba(0,0,0,0)',
	},
	leftInputWidth: {
		width: (wWidth/4) * 3 - 30,
	},
	btnGetCodeWrap: {
		height: 30,
		width: wWidth/4,
		borderRadius: 4,
		borderWidth: .5,
		borderColor: cStyle.btnColor,
		backgroundColor: cStyle.btnColor,
	},
	btnGetCodeWrap2: {
		borderColor: cStyle.borderColor,
		backgroundColor: cStyle.borderColor,
	},
	btnGetCode: {
		color: '#fff',
		fontSize: 12,
	},

	btnBeginUseWrap: {
		height: 30,
		width: wWidth - 20,
		borderRadius: 4,
		borderWidth: .5,
		borderColor: cStyle.btnColor,
		backgroundColor: cStyle.btnColor,
	},
	borderLeft: {
		borderLeftWidth: .5,
		borderLeftColor: cStyle.borderColor,	
	},

	//Home
	pageImg: {
		height: 160,
		resizeMode: 'stretch',
	},
	countInfoWrap: {
		backgroundColor: '#fff',
		height: 40,
	},
	iconCoin: {
		height: 18,
		width: 16,
		resizeMode: 'stretch',
	},
	iconDh: {
		height: 18,
		width: 18,
		resizeMode: 'stretch',
	},
	sectionTit: {
	},
	titLine: {
		borderTopWidth: 1,
		borderTopColor: '#E5E5E5',
	},
	hTit: {
		backgroundColor: cStyle.bColor,
		position: 'relative',
		marginTop: -10,
	},
	sectionCont: {
		backgroundColor: '#fff',
	},
	sectionContent: {
		borderLeftWidth: .5,
		borderLeftColor: cStyle.borderColor,
		padding: 6,
		height: 180,
	},
	leftImg: {
		height: wWidth/2 - 40,	
		width: wWidth/2 - 6,
		resizeMode: 'stretch',
	},
	leftImg2: {
		height: wWidth/4 - 40,	
		width: wWidth/4 - 10,
		resizeMode: 'stretch',
		position: 'absolute',
		bottom: 0,
		right: 0,
	},
	noLeftImg: {position: 'relative', top: -20},
	noLeftImg2: {width: wWidth/2, height: wWidth/4, right: -10 },
	btop: {
		borderTopWidth: .5,
		borderTopColor: cStyle.borderColor,
		marginTop: -1,
	},
	sectionService: {
		backgroundColor: '#fff',
		flexWrap: 'wrap',
	},
	serviceCell: {
		width: wWidth/4,
	},
	cellImg: {
		height: 36,	
		width: 36,
		marginBottom: 3,
	},
	proWrap: {
		flexWrap: 'wrap',
	},
	proCell: {
		width: wWidth/2+1,
		borderBottomWidth: .5,
		borderBottomColor: cStyle.borderColor,
		marginBottom: -1,
		borderRightWidth: .5,
		borderRightColor: cStyle.borderColor,
		marginRight: -1,
	},
	proImg: {
		height: 60,
		width: wWidth/2 - 14,
	},
	listLi: {
		borderTopWidth: .5,
		borderTopColor: cStyle.borderColor,
		marginTop: -1,
	},
	listImg: {
		width: wWidth/3 - 5,
		height: 60,
		resizeMode: 'contain',
	},
	rListCont: {
		
	},
	dhInfo: {
		justifyContent: 'space-between',
		width: (wWidth/3)*2 - 20,
	},
	
	//Detail
	pageImg2: {
		height: 160,
	},
	dhBtnWrap: {
		justifyContent: 'space-between',
		borderBottomWidth: .5,
		borderBottomColor: cStyle.borderColor,
	},
	needPoint: {
		fontSize: 20,
		fontWeight: '300',
	},
	btnDh: {
		backgroundColor: cStyle.btnColor,
		borderRadius: 6,
		height: 30,
		width: wWidth/4,
	},
	pointWrap: {
		width: (wWidth/4)*2,
	},
	
	//category
	category: {
		flexWrap: 'wrap',
	},
	overLayerInner: {
		borderRadius: 6,
		borderWidth: .5,
		borderColor: cStyle.borderColor,
		width: (wWidth/4)*3,
	},
	overLayerHeader: {
		borderBottomWidth: .5,
		borderBottomColor: cStyle.borderColor,
		paddingTop: 40,	
		paddingBottom: 40,
		paddingLeft: 16,
		paddingRight: 16,
		width: (wWidth/4)*3,
	},
	overBtn: {
		marginLeft: -1,
		paddingTop: 12,
		paddingBottom: 12,
	},
	
	//GetScoreList
	scoreWrap: {
		borderBottomWidth: .5,
		borderBottomColor: '#eee',
		width: wWidth - 30,
		justifyContent: 'space-between',
	},
	scoreLeft: {
		paddingTop: 10, paddingBottom: 10,
	},
	scoreRight: {
		
	},
	scoreDateWrap: {paddingTop: 10, paddingBottom: 10,},
	webView: {backgroundColor: '#fff', height: wHeight},

});

module.exports = styles;