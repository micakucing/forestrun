import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import Nav from "./nav";
 import Fot from "./foot";
 import { Helmet } from "react-helmet";

class  mid extends Component {
    componentDidMount() {}
    render() {
    		const cssString = `
        .site-section{
          padding-top: 0;
          padding-bottom: 0;
        }
        .h3{
              font-family: mor;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
        }
#kkbox{
       top: -150px;
    position: relative;
    padding: 50px;
    z-index: 9;
    background: #fff;
}
#googleMap {
    width: 100%;
    height: 550px;
}
        body{
          font-family: Quicksand;
        }
        .text-primary{
          color: #272F5F !important;
        }
        #hog{
          background: #272F5F;
              border-radius: 5px;
    padding: 15px !important;
        }
         #hog{
          background: #272F5F;
        }
        #los{
              max-width: 100%;
    padding: 0;
        }
.App{
	text-align: center;
}
@media (max-width: 992px) {
 .col-md-7{
  margin-bottom: 50px;
 }
 #kkbox {
      padding-top: 60px !important;

    padding: 15px;
    
}
}`
        return (

            <div>
  <Helmet>
                <meta charSet="utf-8" />
                <title>Cikole Forest Run | contact page </title>
                
             </Helmet>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 
<Nav />
                 <div className="site-section">

                 <div className="llps">
                 <div id="googleMap"><iframe frameborder="0" height="100%" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253497.13516734913!2d107.50307079265457!3d-6.90342901505421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e815b2!2sBandung%2C+Kota+Bandung%2C+Jawa+Barat!5e0!3m2!1sid!2sid!4v1554809283272!5m2!1sid!2sid" width="100%"></iframe></div>
      </div>
      <div id="kkbox" className="container">
        <div className="row">
          <div className="col-md-12">
          </div>
          <div className="col-md-7">

            <form action="/#/contact" >
    
              <div className="p-3 p-lg-5 border">
                <div className="form-group row">
                  <div className="col-md-6">
                    <label for="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_fname" name="c_fname"  />
                  </div>
                  <div className="col-md-6">
                    <label for="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" id="c_lname" name="c_lname" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" id="c_email" name="c_email" placeholder="" />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_subject" className="text-black">Subject </label>
                    <input type="text" className="form-control" id="c_subject" name="c_subject" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <label for="c_message" className="text-black">Message </label>
                    <textarea name="c_message" id="c_message" cols="30" rows="7" className="form-control"></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-lg-12">
                    <input id="hog" type="button" className="btn btn-primary btn-lg btn-block" value="Send Message" />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-5 ml-auto">
            <div className="p-4 border mb-3">
              <span className="d-block text-primary h6 text-uppercase">Address</span>
              <p className="mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
            <div className="p-4 border mb-3">
              <span className="d-block text-primary h6 text-uppercase">Phone</span>
              <p className="mb-0">+1234567</p>
            </div>
            <div className="p-4 border mb-3">
              <span className="d-block text-primary h6 text-uppercase">Email Address

</span>
              <p className="mb-0">admin@gmail.com</p>
            </div>

          </div>
        </div>
      </div>
    </div>
 


                
                   <Fot />






      </div>

        );
    }
}
export default mid;