import React from 'react'
import '../../App.css'
import './deal.css'
import  dealImg  from '../../images/deal-img.jpg'

function Deal() {
  return (
    <div className="deal">

        <div className="content">
            <h3>deal of the day</h3>
            <h1>upto 50% off</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Unde perspiciatis in 
                atque dolore tempora quaerat 
                at fuga dolorum natus velit.
            </p>
        </div>

        <div className="image">
        <img src={dealImg} alt=""/>
        </div>

    </div>
  )
}

export default Deal
