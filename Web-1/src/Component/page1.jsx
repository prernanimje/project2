import React from 'react'
import Sky from '../assets/images/go.jpg'
import Right from '../assets/images/right.png'
import Amazon from '../assets/images/social.png'
import Shopify from '../assets/images/shopify.png'
import paypal from '../assets/images/paypal.png'
import slack from '../assets/images/slack.png'
import trello from '../assets/images/trello.png'

function page1() {
  return (
    <div>
        <div id="full">
            <div className="grow">
               <pre className="sit"><b>
                  <p className='start'>Grow Your</p>
                  <p className='start'>Business With</p> 
                  <p className='start'>Us <img src={Right} alt="arrow" className='arrow-right' /></p></b>
             </pre>
                 <p className="lo" style={{paddingLeft: '183px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Esse, cum? Sapiente earum illum reiciendis vel.</p>
                <button id="get"><a href="signin.html">Get Started <img src={Right} alt="arrow" className='right-arrow'/></a></button>
             </div>
            <div id="photo"><img src={Sky} alt="sky" className='sky'/></div>
        </div> 
        <div className="low">
            <ul>
                <li><img src={Amazon} alt="amazon logo" className='logo' />&nbsp;<b>amazon</b></li>
                <li><img src={paypal} alt="paypal logo" className='logo'  />&nbsp;paypal</li>
                <li><img src={Shopify} alt="shopify logo" className='logo'  />&nbsp;shopify</li>
                <li><img src={slack} alt="slack logo" className='logo' />&nbsp;<b>slack</b></li>
                <li><img src={trello} alt="trello logo" className='logo' />&nbsp;<b>trello</b></li>
            </ul>
        </div>
    </div>
  )
}

export default page1
