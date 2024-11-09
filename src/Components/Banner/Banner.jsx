import React from 'react'
import './Banner.css'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <section className="istiak_banner">
      <div className="container">
        <div className="banner_row">
          <div className="banner_text">
            <h1>Want anything to be easy with <span>LaslesVPN.</span></h1>
            <p>Provide a network for all your needs with ease and fun using <span>LaslesVPN</span> discover interesting features from us.</p>
            <Link to={''}>Get Started</Link>
          </div>
          <div className="banner_image">
            <img src="Images/bannerOne.png" alt="image" />
          </div>
        </div>

      </div>

    </section>
  )
}

export default Banner
