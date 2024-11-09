import React from 'react'
import './Features.css'
import { FaCheckCircle } from "react-icons/fa";


const Features = () => {
  return (
    <section className='istiak_features'>
        <div className="container">
            <div className="features">
                <div className="features_image">
                    <img src="Images/bannerTwo.png" alt="bannerTwo image" />
                </div>
                <div className="features_card">
                    <div className="features_text">
                        <h1>We Provide Many Features You Can Use</h1>
                        <p>You can explore the features that we provide with fun and have their own functions each feature.</p>
                        <div className="features_points">
                            <ul>
                                <li><span><FaCheckCircle /></span>Powerfull online protection.</li>
                                <li><span><FaCheckCircle /></span>Internet without borders.</li>
                                <li><span><FaCheckCircle /></span>Supercharged VPN</li>
                                <li><span><FaCheckCircle /></span>No specific time limits.</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Features
