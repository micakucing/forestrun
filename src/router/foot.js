import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class foot extends Component {
    componentDidMount() {}
    render() {
    		const cssString = `
        #mmg{
                max-width: 35%;
    margin-bottom: 40px;
        }
          .obb{
        margin: 0 5%;
    font-family: mor;
    color: #fff;
        font-size: 15px;
    letter-spacing: 1px;
  }
   #lok{
      padding-top: 0 !important;
      margin-top:  0 !important;
    }
.App{
	text-align: center;
}
@media (max-width: 992px) {
         .obb{
       font-size: 10px;
  }
 #mmg {
    max-width: 70%;
 }
}`
        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                 <footer className="site-footer border-top">
        <div className="container">
           
            <div id="lok" className="row pt-5 mt-5 text-center">
        <ul className="sosb">
                
                    
                <li><span id="pg" className="icon-instagram"></span></li>
                <li><span id="pg" className="icon-twitter"></span></li>
                <li><span id="pg" className="icon-facebook-f"></span></li>
              </ul>
                <div className="col-md-12">
  
          
            <img id="mmg"  className="thumb-image loaded" src="https://res.cloudinary.com/forestrun/image/upload/v1554636230/logo_sponsor.png" />

   
                   <div className="obb">Copyright ©2019 by Cikole Forest Run. All rights reserved.</div>
                </div>
            </div>
        </div>
    </footer>
      </div>

        );
    }
}
export default foot;