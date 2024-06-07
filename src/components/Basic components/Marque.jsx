import React from 'react';
import './marque.css'

const Marque = () => {

  const reglink="https://docs.google.com/forms/d/e/1FAIpQLSewOTxyNdHhCXwVwB9O6ZvF0LGzySQ_ci95hqoq0DrghrP7Nw/viewform";

  return (
    <>
        <div className="marquee">
      <div className="marquee-content">
      <a href={reglink}>Registration for “Four-week Summer Internship on Drone, 3D Printing, Design 2024” </a>
      {/* --- <span className='marquee-link'>Link</span> */}
      </div>
    </div>
    </>
  )
}

export default Marque