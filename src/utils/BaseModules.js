'use strict';

const BaseModules = {
    get Launch(){ return require('../views/Launch.js'); },
    get TopScreen(){ return require('../views/topScreen.js'); },
    get Detail(){ return require('../views/detail.js'); },
}

module.exports = BaseModules;