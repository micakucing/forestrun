import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import $ from "jquery";
import queryString from 'query-string';
import { Fade, Zoom } from 'react-slideshow-image';


const images = [
    "http://a5.mzstatic.com/us/r30/Purple5/v4/c1/2f/4c/c12f4cba-1d9a-f6bf-2240-04085d3470ec/icon175x175.jpeg",
    "http://is2.mzstatic.com/image/thumb/Purple122/v4/d2/36/28/d23628e5-c9bf-d0fb-104f-61fa52976ff5/source/175x175bb.jpg",
    "http://a4.mzstatic.com/us/r30/Purple62/v4/1f/8d/f9/1f8df910-8ec7-3b8e-0104-d44e869f4d65/icon175x175.jpeg"
];

class nav extends Component {
    constructor() {
        super();
        this.state = {
            imageIndex: 0
        };

    }
    componentDidMount() {}
    componentWillMount() {

    }

    componentWillUnmount() {


    }


    render() {
        const cssString = `
        #wrps{
              z-index: 1;
    position: relative;
          #ccl{
              height: 150px;
              overflow: hidden;
        }
        }
        .site-navbar .site-navigation .site-menu > li {
     padding: 0 10px;
}
#padd{
  padding-bottom: 20px;
}
         #plomini{
display: none;
  }
  #ploxmini{
display: none;
  }
   #regme{
      margin-top: 80px;

    }
      #pg{
       font-size: 18px;
    padding: 8px;
        color: #fff;
  }
  .btn.btn-primary {
   border-color: #fff;
    border-width: 2px;
    font-weight: 300;
    border-radius: 3px;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 11px !important;
       padding: 19px 55px !important;  
     color: #fff;
}
#plo{
margin: 0 auto;
    height: 150px;
    background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run.png);
    width: 60%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
}
#plox{
margin: 0 auto;
    height: 150px;
    background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run2.png);
    width: 100%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
}
        #gh{
              margin-bottom: 30px;
    margin-top: 10px;
        }
.App{
  text-align: center;
}
.thumb-image{
  max-width: 100%;
    max-height: 100%;
}
#ggb{
      width: 75%;
    overflow: hidden;
    height: 80px;
    position: absolute;
}
  #lkps{
        padding-bottom: 39px;
    margin-top: 40px;
}
a.clik{
  color: #c2ff19 !important; 
}
.site-mobile-menu-body ul {
  padding-left: 0;
  list-style: none;
}
.site-mobile-menu-body ul li {
 padding-bottom: 15px;
}

.site-mobile-menu-body ul li a{
  font-size: 20px;
  color: #fff;
  font-family: mor;

}
.sosb {
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
#textim{
  max-width: 90% !important;
}



@media (min-width: 1200px) {
    #yyk {
        max-width: 1200px !important;
    }
    #wrpimage{
       max-width: 1280px !important;
    }
}


@media (max-width: 1280px) {

#plo{
 
    width: 70%;
   
}

}
@media (max-width: 992px) {
 
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
#lkps {
    padding-bottom: 30px;
    margin-top: 1%;
    margin-bottom: 1%;
}
}

@media (max-width: 860px) {

}


@media (max-width: 768px){
.container {
    max-width: 600px;
}
#textim {
    max-width: 100% !important;
}
#lkps {
    padding-bottom: 30px;
    margin-top: 1%;
    margin-bottom: 1%;
}



}
@media (max-width: 650px) {
#lkps {
    padding-bottom: 30px;
    margin-top: 3% !important;
    margin-bottom: 1%;
}
}

    @media (max-width: 767px) {

#plo{
     height: 150px;
   
    width: 100%;
    }
#plox{
     height: 150px;
     width: 100%;
    
}


 .btn.btn-primary {
    border-color: #fff;
    font-weight: 300;
    border-radius: 0;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 11px !important;
    padding: 10px 20px !important;
    color: #fff;
}


 #plomini{
display: block;
    height: 80px;
     background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run.png);
    width: 45%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

     #ploxmini{
display: block;
    height: 80px;
       background-image: url(https://res.cloudinary.com/forestrun/image/upload/v1554636231/Logo_Run2.png);

     width: 75%;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  #ccl{
    display: none;
  }
    #plo{
  }
display: none;
  }

}

} 
@media (max-width: 320px) {
  .btn.btn-primary {
    border-color: #fff;
    font-weight: 300;
    border-radius: 0;
    letter-spacing: .1em;
    font-weight: bold;
    font-size: 9px !important;
    padding:  10px 10px !important;;
 
    color: #fff;
}
}
`



        $(document).on("click", "#hrf", function(e) {

            $('body').removeClass('offcanvas-menu')

        })



        let c, homes, abouts, blow, tops, works, bnrs, shops, kontak, ati;
        c = window.location.hash.substr(2)
        var t = window.location.href
        var o = t.split("/")[4]

        if (c == "") {
            homes = <li><a className="clik">HOME</a></li>
            bnrs = <div id="wrpimage" className="container"><div className="row align-items-start align-items-md-center justify-content-end"><div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkps"><img id="textim" className="thumb-image loaded"  src="https://res.cloudinary.com/forestrun/image/upload/f_auto/v1554636128/t.png" /> <div className="intro-text text-center text-md-center"><p><a id="regme" href="#" className="btn btn-sm btn-primary">DAFTAR</a></p></div></div></div></div>
            blow = ''
            tops = ''
        } else {
            homes = <li><a id="hrf"  href="#/">HOME</a></li>
            bnrs = <div id="wrpimage" className="container"><div className="row align-items-start align-items-md-center justify-content-end"><div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkps"><img id="textim" className="thumb-image loaded"  src="https://res.cloudinary.com/forestrun/image/upload/f_auto/v1554636128/t.png" /> <div className="intro-text text-center text-md-center"><p><a id="regme" href="#" className="btn btn-sm btn-primary">DAFTAR</a></p></div></div></div></div>
            blow = ''
            tops = ''
        }
        if (c == "information") {
            abouts = <li><a className="clik">INFORMATION</a></li>
            bnrs = ''
            blow = 'padd'
            tops = 'padtops'
        } else {
            abouts = <li><a id="hrf" href="#/information">INFORMATION</a></li>

        }
        if (c == "information" || o == "information") {
            abouts = <li><a className="clik">INFORMATION</a></li>
            bnrs = ''
            blow = 'padd'
            tops = 'padtops'
        } else {
            abouts = <li><a id="hrf" href="#/information">INFORMATION</a></li>

        }

        if (c == "articles" || o == "articles-data") {
            ati = <a className="activex"><li>&nbsp;&nbsp;Articles &nbsp;&nbsp;</li></a>
            bnrs = ''
            blow = 'padd'
            tops = 'padtops'
        } else {
            ati = <a id="hrf" href="#/articles" id="ppl" ><li>&nbsp;&nbsp;Articles &nbsp;&nbsp;</li></a>

        }
        if (c == "contact") {
            kontak = <li><a className="clik">CONTACT</a></li>
            bnrs = ''
            blow = 'padd'
            tops = 'padtops'

        } else {
            kontak = <li><a id="hrf" href="#/contact"  >CONTACT</a></li>



        }



        let fadeProperties = {
            duration: 5000,
            transitionDuration: 500,
            infinite: true,
            autoplay: true,
            indicators: false,

            arrows: false
        }

        const zoomOutProperties = {
            duration: 5000,
            transitionDuration: 800,
            infinite: true,
            indicators: false,
            scale: 1,
            arrows: false
        }


        return (

            <div id="wrps">
                


                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 
                          <div className="site-wrap">

<div className="site-mobile-menu"> 
    <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">


        </div>
    </div>
    <div className="site-mobile-menu-body">

<ul id="lb">


                      
                        {homes}

  {abouts}
                         
                        <li><a  id="hrf" href="#">REGISTRATION</a></li>
                        {kontak}</ul>

    </div>   
</div>
</div>
                <header id={tops} className="site-navbar" role="banner">
            <div className="site-navbar-top">
                <div id="yyk" className="container">
                    <div className="order-3 order-md-3 text-right">
                        <div className="site-top-icons">
                             <ul className="sosb">
                
                <li><span id="pg" className="icon-instagram"></span></li>
                <li><span id="pg" className="icon-twitter"></span></li>
                <li><span id="pg" className="icon-facebook-f"></span></li>
              </ul>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                        </div>
                        <div id="ccl" className="col-12 mb-3 mb-md-0 col-md-4 order-1 order-md-2 text-center">
    <Fade {...fadeProperties}>
  <div id="plo" data-i={images[0]} className="site-logo">
                               
                            </div>
                                <div id="plox"  data-i={images[1]} className="site-logo">
                               
                            </div>
 
  </Fade>




                           
                           
                        </div>
                        <div className="col-12 col-md-4 order-3 order-md-3 text-right">
                            <div id="rel" className="site-top-icons">
                            <div id="ggb">
  <Zoom {...zoomOutProperties}>
                                 <div id="plomini"    className="site-logo">
                               
                            </div>
                              <div id="ploxmini"   className="site-logo">
                               
                            </div>
                              </ Zoom>
                            </div>
                                <ul>
                                    <li className="d-inline-block d-md-none ml-md-0">

                                    <a href="#" className="site-menu-toggle js-menu-toggle">


                                      <span className="icon-menu"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav id={blow} className="site-navigation text-right text-md-center" role="navigation">
                <div id="gh" className="container">
                    <ul className="site-menu js-clone-nav d-none d-md-block">
                       
 {homes}
                       {abouts}
                        <li><a href="#">REGISTRATION</a></li>
                        {kontak}
                    </ul>
                </div>
            </nav>
            {bnrs}
        </header>
      </div>

        );
    }
}
export default nav;