import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import BackgroundSlider from 'react-background-slider'

class slid extends Component {
    componentDidMount() {
/*

  let links = ["n","a","f","p"];
        let images = ["https://res.cloudinary.com/forestrun/image/upload/v1554798969/h.jpg","https://res.cloudinary.com/forestrun/image/upload/v1554636363/Foto_Forest02.jpg","https://res.cloudinary.com/forestrun/image/upload/v1554797905/p1.jpg","https://res.cloudinary.com/forestrun/image/upload/v1554797905/p2.jpg"];
        let i = 0;
        let time = 4;
        this.renew = setInterval(function(){
            if(links.length == i){
                i = 0;
            }
            else {
            document.getElementById("bannerImage").style.backgroundImage = "url("+images[i]+")"; 
            document.getElementById("bannerImage"); 
            i++;

        }
         clearInterval()
        }, 1000);
*/
    }


      componentWillUnmount() {

    clearInterval(this.renew);


}
    render() {
    		const cssString = `
#boxed{
    margin: 0 auto;
}
.App{
	text-align: center;
}
 #mags{
    max-width: 56%;
 }
 #lkp{
  padding-bottom: 30px;
    margin-top: 20px;
}

    @media (max-width: 992px) {
   #mags{
    max-width: 70%;
 }
      #lkp{
    padding-bottom: 30px;
    margin-top: 10%;
    margin-bottom: 13%;
}
    }
   @media (max-width: 800px) {
  #mags {
        max-width: 80%;
}

}

 `https://res.cloudinary.com/forestrun/image/upload//v1554635818/Bagan_Hijau.webp

        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                  <div className="site-blocks-cover"   data-aos="fade">
                  <BackgroundSlider
  images={["https://res.cloudinary.com/forestrun/image/upload/q_auto:low/v1554798969/h.webp",
  "https://res.cloudinary.com/forestrun/image/upload/q_auto:low/v1554636363/Foto_Forest02.webp",
  "https://res.cloudinary.com/forestrun/image/upload/q_auto:low/v1554797905/p1.webp","https://res.cloudinary.com/forestrun/image/upload/q_auto:low/v1554797905/p2.webp"]}
  duration={5} transition={0.2} />
            <div className="container">
                <div id="boxed" className="row align-items-start align-items-md-center justify-content-end">
                    <div className="col-md-12 text-center text-md-center pt-5 pt-md-0" id="lkp">
                                      <img id="mags" className="thumb-image loaded" src="https://res.cloudinary.com/forestrun/image/upload/v1554635818/A_run_in_nature.png" />


                    </div>
                </div>
            </div>
        </div>
      </div>

        );
    }
}
export default slid;