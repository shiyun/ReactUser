'use strict';

const BaseModules = {
    get Login(){ return require('../views/Login'); },
    get Home(){ return require('../views/Home'); },
    get ChangeList(){ return require('../views/ChangeList'); },
    get Detail(){ return require('../views/Detail'); },
    get Category(){ return require('../views/Category'); },
    get GetScoreList(){ return require('../views/GetScoreList'); },
}

module.exports = BaseModules;