import './header.css';

let header = {
     init() {
        const _logo = require('./image/logo-nightwatch.png');
        document.getElementById('header_logo').src = _logo;
        //console.log("header widgets");
        init_img();
     },
     init_img(){
        
     }
 };
 export default header;