import React from 'react';
import './marque.css'

const Marque = () => {

  const reglink="https://forms.gle/4tLAVMkJyvGhdBwT8";

  return (
    <>
        <div className="marquee">
      <div className="marquee-content">
      <a href={reglink} target='_blank'>Registration for Internship on Drone, 3D Printing, Design 2024</a> 
      - <span className='marquee-link'>Click Here</span>

      {/* <span>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;Registration closes on 14-June-2024 at 11:59 P.M.</span> */}
      {/* <span>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;Internship starts on 15-June-2024 in the Morning.
</span> */}
      
      </div>
    </div>
    </>
  )
}

export default Marque