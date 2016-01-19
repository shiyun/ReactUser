'use strict';

let BaseUtils = {
	get BaseStyles(){return require('../styles/styles.js');},
    get HttpService(){return require('./service.js');},
}

module.exports = BaseUtils;