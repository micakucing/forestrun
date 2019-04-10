import React, { Component } from 'react';
import { Link } from "react-router-dom";
 import { default as minifyCssString } from 'minify-css-string';
 import 'react-photoswipe/lib/photoswipe.css';
  import { PhotoSwipeGallery } from 'react-photoswipe';
import queryString from 'query-string';
import { Helmet } from "react-helmet";

class infox extends Component {
    componentDidMount() {}
    render() {
    		const cssString = `
#magsx{
	    margin-bottom: 80px;
}
#jkm {
	max-width: 980px;
}
#kkti{

    padding-top: 90px;
      font-size: 18px;

    font-family: arial;
    color: #25262a;
       padding-bottom: 30px;
}
#googleMap {
    width: 100%;
    height: 550px;
    margin-bottom: 150px;
}
     
.pswp--animated-in .pswp__bg, .pswp--animated-in .pswp__zoom-wrap {
    -webkit-transition: none;
    transition: none!important;
}
.pswp--animate_opacity {
    opacity: 0.001;
    will-change: opacity;
    transition: none!important;
}
    .pswp__button--share{
  display: none;
 }
    @media (max-width: 992px) {
#jkm {
    max-width: 780px;
}

#kkti {
    padding-top: 50px;
     
      font-size: 15px;
    padding-bottom: 30px;
}


}
    @media (max-width: 800px) {

#jkm {
    max-width: 580px;
}


}
    		`      
    		let param = window.location.pathname;
 
    		const items = [{
                  src: '',
                  thumbnail: '',
                  w: 3000,
                  h: 1876
              } 
          ];     
 
    		 const options = {
              //http://photoswi
              bgOpacity: 1,
              showHideOpacity: true,
              closeOnScroll: false,
              preloaderEl: true,
              showAnimationDuration: 0,
              hideAnimationDuration: 0
          };

          const getThumbnailContent = (item) => {
              return (
               


<img id="magsx" isOpen="true"  itemprop="contentUrl"  className="thumb-image loaded" src="https://res.cloudinary.com/forestrun/image/upload/v1554636282/Medal.jpg" />
 
  
              );
          }
        return (

            <div>

       <Helmet>
                <meta charSet="utf-8" />
                <title>Cikole Forest Run | information </title>
                
             </Helmet>

                                      <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

<div id="jkm" className="container">
             <p id="kkti" className="ops">
Cikole Forest Run adalah rangkaian sport tourism dan wisata alam yang diselenggarakan oleh Wievent yang bekerjasama dengan perum Perhutani Divre Jabar Banten. Kegiatan yang terdiri dari camping ground, olahraga lari marathon, dan edukasi akan hutan Cikole, serta manfaat ekologi masyarakat dalam pemanfaatan dan pelestarian alam hutan di Cikole, Lembang.
                </p>
                                                      
                                   <div id="googleMap"><iframe frameborder="0" height="100%" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253497.13516734913!2d107.50307079265457!3d-6.90342901505421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C+Kota+Bandung%2C+Jawa+Barat!5e0!3m2!1sid!2sid!4v1554809283272!5m2!1sid!2sid" width="100%"></iframe></div>


              </div>
      </div>

        );
    }
}
export default infox;