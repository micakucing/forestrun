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

    font-family: Quicksand;
    color: #212D61;
        padding-bottom: 90px;
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
                                                      
                  

              </div>
      </div>

        );
    }
}
export default infox;