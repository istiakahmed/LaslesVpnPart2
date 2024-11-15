import React from 'react'
import './Subscription.css'
import { Link } from 'react-router-dom'

const Subscription = () => {
  return (
   <>
    <section className='Istiak_subs'>
        <div className="container">
            <div className="subscription">
            <div className="subs_title">
                <div className="subs_text">
                    <h2>Subscribe Now for Get Special Features!</h2>
                    <p>Let's subscribe with us and find the fun.</p>
                </div>
                <div className="subs_button">
                    <Link to={''}>Subscribe Now</Link>
                    
                </div>
            </div>
            </div>
            

        </div>

    </section>
   </>
  )
}

export default Subscription
