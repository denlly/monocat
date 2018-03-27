var DevWebpack = require('./config/webpack.dev');
var ProdWebpack = require('./config/webpack.prod');

console.log(DevWebpack);
console.log(ProdWebpack);
switch(process.env.NODE_ENV){
    case 'dev':
        module.exports = DevWebpack;
    break;
    case 'prod':
        module.exports = ProdWebpack;
    break;
    default:
        module.exports = DevWebpack;
    break;
}