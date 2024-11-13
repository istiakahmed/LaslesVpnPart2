import React from 'react'
import './LasMap.css'

const LasMap = () => {
  return (
    <>
    <section className='Istiak_map'>
        <div className="container">
            <div className="Istiak_mapText">
                <h2>Huge Global Network of Fast VPN</h2>
                <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            </div>
            <div className="map_image">
                <img src="Images/map.png" alt="mapImage" />
                <img className='mapLocation locGpOne' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpTwo' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpThree' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpFour' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpFive' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpSix' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpSeven' src="Images/mapLcation.png" alt="locationImage" />
                <img className='mapLocation locGpEight' src="Images/mapLcation.png" alt="locationImage" />

            </div>
            <div className="sponsor">
              <img src="Images/group1.png" alt="sponsor_Image" />
              <img src="Images/group2.png" alt="sponsor_Image" />
              <img src="Images/group3.png" alt="sponsor_Image" />
              <img src="Images/group4.png" alt="sponsor_Image" />
              <img src="Images/group5.png" alt="sponsor_Image" />

            </div>
        </div>

    </section>
    </>
  )
}

export default LasMap
