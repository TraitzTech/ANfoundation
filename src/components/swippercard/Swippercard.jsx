import React from 'react'
import './swipercard.css'
import Button from '../button/Button'

import swiperImg from "../../assets/swipperchildren.png"

const Swippercard = () => {
  return (
    <div className='swipper-card-container'>
        <div className="swipper-card">
            <div className="s-img">
                <img src={swiperImg} alt="" />
            </div>

            <h3>
                Livelihood Training
            </h3>
            <p>
            (solar electrification and entrepreneurship) for two at-risk young men in recovery from drug addiction
            </p>

            <div className="swipper-button">
                <Button className='fill-orange' content="see more"/>
            </div>
        </div>
    </div>
  )
}

export default Swippercard
