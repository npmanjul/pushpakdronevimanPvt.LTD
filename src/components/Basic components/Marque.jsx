import React from 'react';
import './marque.css'

const Marque = () => {

  const reglink="https://docs.google.com/forms/d/e/1FAIpQLSewOTxyNdHhCXwVwB9O6ZvF0LGzySQ_ci95hqoq0DrghrP7Nw/viewform";

  return (
    <>
        <div className="marquee">
      <div className="marquee-content">
      <a href='#' target='_blank'>Registration for “Four-week Summer Internship on Drone, 3D Printing, Design 2024” is Closed </a> 
      {/* - <span className='marquee-link'>Click Here</span> */}

      {/* <span>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;Registration closes on 14-June-2024 at 11:59 P.M.</span> */}
      <span>&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;Internship starts on 15-June-2024 in the Morning.
</span>
      
      </div>
    </div>
    </>
  )
}

export default Marque