import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import Fot from "./foot";
import $ from "jquery";
import { Helmet } from "react-helmet";

class not extends Component {
  componentDidMount() {


  let c = window.location.hash.substr(2)
   let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
if(format.test(c)){
      window.location.assign("https://cikoleforestrun.co.id/");

 
//window.location.href="/"
return
}else{


}
    }
    render() {
       let c = window.location.hash.substr(2)
   let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
if(format.test(c)){
      window.location.assign("https://cikoleforestrun.co.id/");
//window.location.href="/"
return
}else{


}
    		const cssString = `
        .san a{
  color: #fff !important;
  background-color: #000;

}
.san a:hover{
  color: #fff !important;
}
        .gones{
           height: 100px;
        }
        #kl{
          height: -webkit-fill-available;
        }
        .gone{ 
          width: 100%;
           position: fixed;
        }
         #pg{
        
       font-size: 18px;
    padding: 8px;
        color: #fff;
  }
.App{
	text-align: center;
}
footer{
  padding-top: 20px !important;
}
.sosb {
  z-index: 1;
      width: 100%;
      padding: 0;
          margin-bottom: 35px;
    }
    .sosb li {
      display: inline-block;
    }
      .sosbs {
      width: 100%;
      padding: 0;
    }
    .sosbs li {
      display: inline-block;
    }
      .sosbs{
      display: none;
    }
    #kl{
      width: -webkit-fill-available;
    }



   #mmg{
          max-width: 50%;
          margin-bottom: 40px;
        }
          .obb{
        margin: 0 5%;
    font-family: vr;
    color: #fff;
        font-size: 15px;
    letter-spacing: .3px;
  }
   #lok{
      padding-top: 0 !important;
      margin-top:  0 !important;
    }
.App{
  text-align: center;
}
 
.tilt{
  font-size: 5rem;
   opacity: 1;
}
.tlt{
      z-index: 1;
    position: relative;
    text-align: center;
    color: #fff;
    margin: 0 auto;
    font-size: 5em;
    margin-top: 0;
    margin-bottom: 5%;
    font-family: mor;
    font-weight: bold;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
}

.san {
      font-size: 15px;
    font-family: vr;
    opacity: 1;
    letter-spacing: 2px;
}
@media (max-width: 992px) {
  .san {
      font-size: 11px;
     
}


.tilt{
  font-size: 2rem;
 }
     #mmg{
          max-width: 50%;
          margin-bottom: 40px;
        }
          .obb{
        margin: 0 5%;
    font-family: vr;
    color: #fff;
        font-size: 15px;
    letter-spacing: .3px;
  }
   #lok{
      padding-top: 0 !important;
      margin-top:  0 !important;
    }
.App{
  text-align: center;
}
 
         .obb{
       font-size: 10px;
  }
 #mmg {
    max-width: 70%;
 
}
 .btn.btn-primary {
  
    width: 25%;
}
#padtops{
  padding-bottom: 20px;
}
.sosbs{
        display: block;
    padding-left: 30px;
    padding-right: 10%;
    margin-bottom: 0;
    }
      .sosbs li span {
           width: 80px;
    margin: 20px;
    display: block;
      }
      #lkps{
    padding-bottom: 30px;
    margin-top: 10%;
    margin-bottom: 1%;
}

}


@media (max-width: 480px) {

  .tlt{
   margin: 0 30px;
    margin-bottom: 20%;
     
}

}


`
/*
var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function animate() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  let translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('#kl').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

animate();*/
        return (

            <div>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Error 404 not found </title>
                
             </Helmet>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                          <div className="gone">
 
 <img id="kl" src="https://res.cloudinary.com/forestrun/image/upload/q_auto:low/v1555453912/008.webp" />


</div>
  

<footer className="site-footer border-top">
        <div className="container">
         
            <div id="lok" className="row pt-5 mt-5 text-center">
             <div className="tlt"> 404 
             <p className="tilt">
PAGE NOT FOUND
<div className="san">Sory we cannot found the page, please go back <a href="https://cikoleforestrun.co.id/">HERE</a></div>

</p>
             </div>
        <ul className="sosb">
                
                    
                <li><span id="pg" className="icon-instagram"></span></li>
                <li><span id="pg" className="icon-twitter"></span></li>
                <li><span id="pg" className="icon-facebook-f"></span></li>
              </ul>
                <div className="col-md-12">
  
          
            <img id="mmg"  className="thumb-image loaded" src="https://res.cloudinary.com/forestrun/image/upload/v1554636230/logo_sponsor.png" />

   
                   <div className="obb">Copyright ©2019 by Cikole Forest Run. All rights reserved. | Design by Larva7 Studio</div>
                </div>
            </div>
        </div>
    </footer>
      </div>

        );
    }
}
export default not;