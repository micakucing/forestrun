import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'
import Slid from "./slid";
import Nav from "./nav";
import Mid from "./mid";
import Bot from "./aboutb";
import Fot from "./foot";
import { Helmet } from "react-helmet";

class home extends Component {
    componentDidMount() {
 


    }
    render() {
        const cssString = `
      
 
   
    .ppt{
        margin-top: 50px !important;
    }
    #grn{
      padding: 0;
      /*background-color: #B8FF45;*/
    }
    .text{
      width: 100%;
    }
    .text-uppercase-p{
        font-size: 60px;
    font-family: mor;
    font-style: italic;
    font-weight: bold;
    color: #2B315E;
    }
   
  #ttx h2{
    font-size: 30px;
    font-family: mor;

     font-weight: bold !important;
    color: #2B315E;
  }

  #pbb{
       
        font-size: 30px;
    color: #25262a;
    position: relative;
    font-weight: bold;
    font-family: mor;
        letter-spacing: 1.8px;
    text-transform: uppercase;
  }
 
.tight {
   font-size: 25px;
    line-height: 0.5em;
    color: #fff;
    padding: 15px;
    letter-spacing: 1.5px;
    font-family: mor;
    font-weight: bold !important;
    background-color: #2B315E;
}
    #ttx{margin: 0 50px;

    }
    .ops{
          font-family: Quicksand;
       color: #25262a;
    margin: 80px 1%; 
    margin-bottom: 0;
        font-size: 20px;
    }
 
#krow{
      margin: 0 50px;
}
#krows{
         margin: 30px 25%;
    margin-right: 29%;
}

 
#rel{
  position: relative;
}
    #gls{
          color: #2B315E;
    font-family: mor;
    font-weight: 900;
    letter-spacing: 2px;
    margin-bottom: 50px !important;
    }
 

    @media (max-width: 992px) {


.site-section-heading.text-center:before {
    
    width: 10%;
  
}

#pbb{
  font-size: 25px;
}


.ops {
   
    margin-top: 100px;
}

 
      .tight {
   font-size: 18px;
     
}
      .site-blocks-cover, .site-blocks-cover .row{
        min-height: 200px;
      }
        
      #krow{
      margin: 0;
}
.obb {
     margin: 0;
}
#krows{
         margin: 0;
    margin-right: 0;
    display: none;
}
  #ttx{margin: 0;

    }
    .site-section {
    padding: 3.5em 0;
}

      .h1, h1 {
    font-size: 1.5rem;
}

 
}
@media (max-width: 860px) {

 
}

    @media (max-width: 800px) {

#pbb {
    font-size: 20px;
}

.ops {
    margin-top: 80px;
        font-size: 13px;
}
.site-section-heading.text-center:before {
    content: "";
    left: 50%;
    top: 60px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    position: absolute;
    width: 11%;
    height: 3px;
    background: #25262a;
}
}


`
        return (
            <div>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome To Cikole Forest Run</title>
                
             </Helmet>
              <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 
               
  <Nav />
  <Slid />
 <Mid />
  <Bot />
  <Fot />
      </div>

        );
    }
}
export default home;