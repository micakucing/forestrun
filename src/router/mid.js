import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { default as minifyCssString } from 'minify-css-string'

class  mid extends Component {
    componentDidMount() {}
    render() {
    		const cssString = `
        #los{
              max-width: 100%;
    padding: 0;
        }
.App{
	text-align: center;
}
@media (max-width: 992px) {
 
}`
        return (

            <div>
                          <style dangerouslySetInnerHTML={{__html: minifyCssString(cssString) }} /> 

                <div className="site-section block-8" id="grn">
            <div className="container" id="los">
               <img class="thumb-image loaded" src="images/h.jpg" />
               
            </div>
        </div>
 
      </div>

        );
    }
}
export default mid;