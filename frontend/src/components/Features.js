import React from 'react'
import { useEffect } from 'react'
import '../css/Feature.css'
import Clubs from './Clubs'
import Bot from '../assests/aibot.gif'
import Volunteer from '../assests/Volunteer.gif'
import Social from '../assests/social.png'
import sensor from '../assests/sensor.png'
import bidding from '../assests/bidding.png'
import price from '../assests/price.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Features = () => {


    return (
        <div className='features-container' id='features'>
            <div className="feature-top">
                <Clubs />
            </div>

            <div className="feature-bottom">
                <p id='feature-text-top'>Some of the top Features<br />out platform provides</p>
                <p id='feature-text-bottom'>Top 4 features of our website that make us <strong>Unquie</strong><br />  <br />  </p>
            </div>

            <div className="feature-bento">
                <div className="bento-top">
                    <div className="bento-top-left" >
                        {/* <image src={Social} alt="" style={{height:'60%',width:'50%',margin:'auto'}}/>
                        <h2>Social Platform</h2>
                        <p>Our social app empowers students to log in and share diverse content formats <br /> including text, images, and videos. Join the vibrant community, <br /> express yourself, and engage with peers effortlessly.</p> */}
                        <img src={Social} alt="" style={{height:'60%',width:'50%', margin:'auto'}}/>
                        <h2>Social Platform</h2>
                        <p> Social app for farmers for daily price updates <br />  <br /> </p> 
                    </div>

                    <div className="bento-top-right">
                        <img src={sensor} alt="" style={{height:'50%',width:'60%'}}/>
                        <h2>Sensor Based Price Prediction</h2>
                        <p> Price Prediction using sensor<br /> <br /> </p>
                    </div>
                </div>

                <div className="bento-bottom">
                    <div className="bento-bottom-left">
                        <img src={bidding} alt="" style={{width:'90%' ,height:'50%'}}/>
                        <h2>Live Bidding</h2>
                        <p>Live bidding between two peoples <br /> in report and block features</p>
                    </div>
                   <div className="bento-bottom-right">
                        <img src={price} alt="" style={{height:'50%'} }/>
                        <h2>Price Prediction</h2>
                        <p>Next day price predication using today's price<br/> 
                        <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features