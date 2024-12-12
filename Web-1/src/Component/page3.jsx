import React from 'react'
import Boy from '../assets/images/boy.jpg'


function page3() {
  return (
       <div className="third">
        <div className="boy"><img src={Boy} alt="boy" style={{borderRadius: "200px"}}/></div>
        <div className="why">
            <h6 style={{fontSize: '50px' ,padding: '30px', color: 'white'}}> Why us?</h6>
            <div className="years">
                <div id="add">
                    <div id="plus">
                        <b>5+</b>
                        <h6>Years of <br/>experience</h6>
                    </div>
                </div>
                <div id="pr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, veritatis temporibus
                    ipsa delectus rem.</div>
            </div>
            <div className="happy">
                <div id="add">
                    <div id="plus">
                        <b>86+</b>
                        <h6>Happy <br/>clients</h6>
                    </div>
                </div>
                <div id="pr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, veritatis temporibus
                    ipsa delectus rem.</div>
            </div>
            <div className="partner">
                <div id="add">
                    <div id="plus">
                        <b>32+</b>
                        <h6>Business <br/>Partner</h6>
                    </div>
                </div>
                <div id="pr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odio, veritatis temporibus
                    ipsa delectus rem.</div>
            </div>
        </div>
        </div>
    
  )
}

export default page3
