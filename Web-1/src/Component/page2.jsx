import React from 'react'
import Web from '../assets/images/web-design.png'
import Dev from'../assets/images/web.png'
import Bag from '../assets/images/bag.png'

function page2() {
  return (
    <div>
      <div className="second">
        <div id="para">
            <p className='save'><b>Save time managing your 
business with our Service</b></p>
            <p className='par'>Lorem ipsum dolor sit amet consectetur
               adipisicing elit.
Suscipit, autem possimus repudiandae magni minus aspernatur?</p>
        </div>
        <div className="mix">
            <div id="p1">
                <span><img src={Web} alt="web design"  className='web'/></span>
                <h3>Web Design</h3>
                <p className='inner'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus minima hic praesentium
                    commodi.</p>
            </div>
            <div id="p2">
                <span><img src={Dev} alt="development" className='web'/></span>
                <h3>Development</h3>
                <p className='inner'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim dolores illum perferendis earum?</p>
            </div>
            <div id="p3">
                <span><img src={Bag} alt="shopping bag" className='web'/></span>
                <h3>Ecommerce</h3>
                <p className='inner'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos ab soluta magnam.</p>
            </div>
        </div>
    </div> 
    </div>
  )
}

export default page2
