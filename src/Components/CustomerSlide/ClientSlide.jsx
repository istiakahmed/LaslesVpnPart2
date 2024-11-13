import React from 'react'
import './ClientSlide.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdStar } from "react-icons/io";



const ClientSlide = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <>
     <div className="container">
      <div className="slider-container">
       <Slider {...settings}>
        <div>
          <div className="client_title">
            <div className="client_head">
              <div className="client_super_head">
              <div className="client_head_info">
              <img src="Images/client1.png" alt="client_image" />
              </div>
              <div className="head_info_two">
              <h2>Viezh Robert</h2>
              <h3>Warsaw, poland</h3>
              </div>
              </div>
              <div className="client_head_star">
                <p>4.5</p>
                <div className="client_icon">
                <IoMdStar />

                </div>
              </div>

            </div>
            <div className="client_text">
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>
        </div>
        <div>
          {/* ----- slide-2 */}
          <div className="client_title">
            <div className="client_head">
              <div className="client_super_head">
              <div className="client_head_info">
              <img src="Images/client2.png" alt="client_image" />
              </div>
              <div className="head_info_two">
              <h2>Yessica Christy</h2>
              <h3>Shanxi, China</h3>
              </div>
              </div>
              <div className="client_head_star">
                <p>4.5</p>
                <div className="client_icon">
                <IoMdStar />

                </div>
              </div>

            </div>
            <div className="client_text chinaG">
              <p>“I like it because I like to travel far and still can connect with high speed.”.</p>
            </div>
          </div>
            
       </div>

        <div>
          {/* ------ slide-3 */}
          <div className="client_title">
            <div className="client_head">
              <div className="client_super_head">
              <div className="client_head_info">
              <img src="Images/client1.png" alt="client_image" />
              </div>
              <div className="head_info_two">
              <h2>Kim Young Jou</h2>
              <h3>Seoul, South Korea</h3>
              </div>
              </div>
              <div className="client_head_star">
                <p>4.5</p>
                <div className="client_icon">
                <IoMdStar />

                </div>
              </div>

            </div>
            <div className="client_text koreaB">
              <p>“This is very unusual for my business that currently requires a virtual private network that has high security.”.</p>
            </div>
          </div>
      
        </div>


        <div>
          {/* ======= slide-4 */}
          <div className="client_title">
            <div className="client_head">
              <div className="client_super_head">
              <div className="client_head_info">
              <img src="Images/client1.png" alt="client_image" />
              </div>
              <div className="head_info_two">
              <h2>Viezh Robert</h2>
              <h3>Warsaw, poland</h3>
              </div>
              </div>
              <div className="client_head_star">
                <p>4.5</p>
                <div className="client_icon">
                <IoMdStar />

                </div>
              </div>

            </div>
            <div className="client_text">
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>

        </div>


        <div>
          {/* ====== slide-5 */}
          <div className="client_title">
            <div className="client_head">
              <div className="client_super_head">
              <div className="client_head_info">
              <img src="Images/client1.png" alt="client_image" />
              </div>
              <div className="head_info_two">
              <h2>Viezh Robert</h2>
              <h3>Warsaw, poland</h3>
              </div>
              </div>
              <div className="client_head_star">
                <p>4.5</p>
                <div className="client_icon">
                <IoMdStar />

                </div>
              </div>

            </div>
            <div className="client_text">
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>
        </div>


        <div>
          {/* ======= slide-6 */}
          <div className="client_title">
            <div className="client_head">
              <div className="client_super_head">
              <div className="client_head_info">
              <img src="Images/client1.png" alt="client_image" />
              </div>
              <div className="head_info_two">
              <h2>Viezh Robert</h2>
              <h3>Warsaw, poland</h3>
              </div>
              </div>
              <div className="client_head_star">
                <p>4.5</p>
                <div className="client_icon">
                <IoMdStar />

                </div>
              </div>

            </div>
            <div className="client_text">
              <p>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>
            </div>
          </div>
        </div>
       </Slider>
      </div>
     </div>
    </>
  )
}

export default ClientSlide
