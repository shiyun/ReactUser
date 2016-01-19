'use strict';

const BaseModules = {
    get Launch(){ return require('../views/Launch.js'); },
    get Home(){ return require('../views/Home/Home'); },
    get Detail(){ return require('../views/detail.js'); },
    get Header(){ return require('../component/Header'); },
    get Footer(){ return require('../component/Footer'); },
}

module.exports = BaseModules;