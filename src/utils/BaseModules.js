'use strict';

const BaseModules = {
    get Launch(){ return require('../views/Launch.js'); },
    get Home(){ return require('../views/Home/Home'); },
    get Detail(){ return require('../views/detail.js'); },
}

module.exports = BaseModules;