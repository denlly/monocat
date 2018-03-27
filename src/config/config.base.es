//应用配置文件
import path from 'path';
import configDev from './config.dev';
import configProd from './config.prod';

import _ from 'lodash';
let config = {
    //默认生产环境
    "env": "production",
    //端口号配置
    "port": 8000,
    //模板所在的目录
    "webpackConf": path.join(__dirname, "../..", "config/webpack.dev.js"),
    "viewDir": path.join(__dirname, '..', 'views'),
    //log所在的目录
    "logDir": path.join(__dirname, '..', 'logs'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname, '..'),

};
//当NODE_ENV环境变量值为local时
//本地调试环境
const NODE_ENV = "development"; //production
if (NODE_ENV === 'development') {
    config = _.extend(config, configDev);
} else {
    config = _.extend(config, configProd);
}
export
    default config;