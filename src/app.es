/*
 *@Description 一个被叫做Monocat的网站
 *@Author fanxd
 *@Date 2018-2-8
 */
'use strict';
import Koa from 'koa';
import convert from 'koa-convert'; //koa1 转换器
import serve from 'koa-static';
import router from 'koa-simple-router';
import path from 'path';
import render from 'koa-swig';
import co from 'co';
import log4js from 'koa-log4';
import session from 'koa-session2';
import redisPool from "koa-redis-pool";
import fs from 'fs';
/*自定义文件包*/
import config from './config/config.base';
//import Store from './utils/loginValidate';
import errorHandler from './utils/errorHandler';
import controllers from './Controllers/controllerInit';
import koaBody from 'koa-body';

const body = koaBody()
    // import webpackDevServer from 'koa-webpack-dev';
const app = new Koa();
app.use(body);
const RDS_PORT = config.RDS_PORT; //端口号
const RDS_HOST = config.RDS_HOST; //服务器IP
const RDS_PWD = config.RDS_PWD; //密码
const logDir = path.join(__dirname, 'logs') //配置目标路径 logs
const logger = log4js.getLogger('app');
// app.use(convert(redisPool({
//     host: RDS_HOST,
//     port: RDS_PORT,
//     max: 75,
//     min: 1,
//     timeout: 3000,
//     log: false,
//     password: RDS_PWD,
//     db: 0
// })));
app.use(session({
    key: "_monocat_id", //default "koa:sess"
}));
// log4js.configure(path.join(__dirname, 'log4js.json'), {
//     cwd: logDir
// });
// app.use(log4js.koaLogger(log4js.getLogger('http'), {
//     level: 'auto'
// }));
app.context.render = co.wrap(render({
    root: config.viewDir,
    autoescape: true,
    cache: 'memory', // disable, set to false
    ext: 'html',
    varControls: ['[[', ']]'],
    writeBody: false
}));
// app.use(async(ctx, next) => {
//     //注入session
//     const redisResult = (new Store(ctx)).get();
//     await redisResult.then((res) => {
//         ctx.session.userInfo = res;
//     });
//     await next();
// });
errorHandler.error(app); //处理页面错误的处理句柄
// app.use(convert(webpackDevServer({
//     config: config.webpackConf
// })));
controllers.getAllrouters(app, router); //初始化controllers
app.use(serve(config.staticDir)); // 静态资源文件
//生成文件夹目录
try {
    fs.mkdirSync(logDir)
} catch (err) {
    if (err.code !== 'EEXIST') {
        console.error('Could not set up log directory, error was: ', err)
        process.exit(1)
    }
}
//监听端口🐂😊
app.listen(config.port);
console.log('nhSystem listening on port %s', config.port);
module.exports = app;