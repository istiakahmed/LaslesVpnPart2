import React from 'react'
import './Counter.css'
import { FaUser } from "react-icons/fa";
import CountUp from 'react-countup';
import { MdLocationOn } from "react-icons/md";
import { FaServer } from "react-icons/fa6";





const Counter = () => {
  return (
    <section className='istiak_counter'>
        <div className="container">
            <div className="istiak_main_counter">
                <div className="one_count">
                    
                        <div className="user_icon">
                            <FaUser />
                        </div>
                    
                    <div className="count_chart">
                    <div className="user_text">
                        <CountUp start={0} end={90} duration={2.5} className='count_num' />
                        <h2>+</h2>
                    </div>
                    <p>Users</p>
                    </div>
                    <div className="count_line"></div>
                </div>
                <div className="one_count">
                    
                        <div className="user_icon">
                            <MdLocationOn />
                        </div>
                    
                    <div className="count_chart">
                    <div className="user_text">
                        <CountUp start={0} end={30} duration={2.5} className='count_num' />
                        <h2>+</h2>
                    </div>
                    <p>Users</p>
                    </div>
                    <div className="count_line"></div>
                </div>
                <div className="one_count">
                    
                        <div className="user_icon">
                            <FaServer />
                        </div>
                    
                    <div className="count_chart">
                    <div className="user_text">
                        <CountUp start={0} end={50} duration={2.5} className='count_num' />
                        <h2>+</h2>
                    </div>
                    <p>Users</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default Counter

