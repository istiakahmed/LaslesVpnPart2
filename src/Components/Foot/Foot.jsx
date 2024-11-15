import React from 'react'
import './Foot.css'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { Link } from 'react-router-dom';


const Foot = () => {
  return (
    <>
     <section className='Istiak_foot'>
        <div className="container">
            <div className="footInfo">
                <div className="grid ">
                    <div className="grid_one">
                        <div className="grid_logo">
                            <img src="Images/Logo.png" alt="logo" />
                        </div>
                        <div className="grid_logo_text">
                            <p><span>LaslesVPN</span> is a private virtual network that has unique features and has high security.</p>
                        </div>
                        <div className="grid_social">
                            <div className="soci_link"><Link  to={''}><TiSocialFacebook /></Link></div>
                            <div className="soci_link"><Link  to={''}><FaTwitter /></Link></div>
                            <div className="soci_link"> <Link  to={''}><TiSocialInstagram /></Link></div>

                        </div>
                        <div className="foot_txt">
                        <p>©2020LaslesVPN</p>
                        </div>
              
                    </div>
                    <div className="grid_two">
                        <div className="grid_rw_one">
                            <div className="grid_colmn_one">
                                <ul>
                                    <li><span>Product</span></li>
                                    <li>Download</li>
                                    <li>Pricing</li>
                                    <li>Location</li>
                                    <li>Server</li>
                                    <li>Countries</li>
                                    <li>Blog</li>
                
                                </ul>
                            </div>
                        </div>
                        <div className="grid_rw_two">
                        <div className="grid_colmn_one">
                                <ul>
                                    <li><span>Engage</span></li>
                                    <li>LaslesVpn?</li>
                                    <li>FAQ</li>
                                    <li>Tutorial</li>
                                    <li>Server</li>
                                    <li>Countries</li>
                                    <li>Blog</li>
                
                                </ul>
                            </div>
                        </div>
                        <div className="grid_rw_three">
                        <div className="grid_colmn_one">
                                <ul>
                                    <li><span>Earn Money</span></li>
                                    <li>Afiliate</li>
                                    <li>Become partner</li>
                
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
     </section>
    </>
  )
}

export default Foot
