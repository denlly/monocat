import './homebanner.css';

let homebanner = {
     init() {
        
         console.log("home banner");
         const img = require("../../assets/images/logo-nightwatch.png");
         document.getElementById("homebanner_img").src = img;
     },
     init_img(){
        
     }
 };
export default homebanner;