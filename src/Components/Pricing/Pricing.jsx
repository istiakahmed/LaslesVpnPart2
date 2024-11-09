import React from 'react'
import './Pricing.css'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Pricing = () => {
  return (
    <section className='istiak_pricing'>
        <div className="container">
            <div className="pricing_row">
                <div className="pricing_head">
                    <h2>Choose Your Plan</h2>
                    <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
                    
                </div>
                <div className="pricing_card">
                    <div className="pricing_single_card">
                        <div className="single_card_image">
                            <div className="card_image">
                                <img src="Images/free.png" alt="image" />
                            </div>
                            <div className="card_title">
                                <h2>Free Plan</h2>
                            </div>

                        </div>
                        <div className="card_point">
                            <ul>
                                <li><span><FaCheck /></span>Unlimited Bandwitch</li>
                                <li><span><FaCheck /></span>Encrypted Connection</li>
                                <li><span><FaCheck /></span>No Traffic Logs</li>
                                <li><span><FaCheck /></span>Works on All Devices</li>
                            </ul>
                        </div>
                        <div className="card_choice">
                            <div className="card_choice_text">
                                <h2>Free</h2>
                            </div>
                            <div className="choice_button">
                                <Link to={'/'}>Select</Link>
                            </div>
                        </div>

                    </div>
                    <div className="pricing_single_card">
                        <div className="single_card_image">
                            <div className="card_image">
                                <img src="Images/free.png" alt="image" />
                            </div>
                            <div className="card_title">
                                <h2>Standard Plan</h2>
                            </div>

                        </div>
                        <div className="card_point">
                            <ul>
                                <li><span><FaCheck /></span>Unlimited Bandwitch</li>
                                <li><span><FaCheck /></span>Encrypted Connection</li>
                                <li><span><FaCheck /></span>No Traffic Logs</li>
                                <li><span><FaCheck /></span>Works on All Devices</li>
                            </ul>
                        </div>
                        <div className="card_choice">
                            <div className="card_choice_text">
                                <h2>$9 <span>/ mo</span></h2>
                            </div>
                            <div className="choice_button">
                                <Link to={'/'}>Select</Link>
                            </div>
                        </div>

                    </div>
                    <div className="pricing_single_card">
                        <div className="single_card_image">
                            <div className="card_image">
                                <img src="Images/free.png" alt="image" />
                            </div>
                            <div className="card_title">
                                <h2>Premium Plan</h2>
                            </div>

                        </div>
                        <div className="card_point">
                            <ul>
                                <li><span><FaCheck /></span>Unlimited Bandwitch</li>
                                <li><span><FaCheck /></span>Encrypted Connection</li>
                                <li><span><FaCheck /></span>No Traffic Logs</li>
                                <li><span><FaCheck /></span>Works on All Devices</li>
                            </ul>
                        </div>
                        <div className="card_choice">
                            <div className="card_choice_text">
                                <h2>$12 <span>/ mo</span></h2>
                            </div>
                            <div className="choice_button">
                                <Link to={'/'}>Select</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>
    
  )
}

export default Pricing
