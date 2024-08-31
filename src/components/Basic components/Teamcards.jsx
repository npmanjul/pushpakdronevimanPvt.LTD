import React from 'react';
import './Teamcard.css'
// import img from '../../Basic components/img/shrivilas_mishra.jpg'
import profiles from '../Basic components/data/Crousaldata'

const Teamcards = () => {
  return (
    <>
       <div className='boardmember-container'>
            {/* <div className='boardmember-heading-box'>
                <div className='boardmember-heading'>Our Board Members</div>
                <div className='horzontal-line'></div>
            </div> */}
            <div className='boardmember-area'>
                {profiles.map((profile) => (
                    <div className='boardmember-profile-cards'>
                        <div className='boardmember-img'>
                            <img src={profile.imgsrc} alt={profile.name} />
                        </div>
                        <div className='boardmember-detail'>
                            <div className='boardmember-name'>
                                {profile.name}
                            </div>
                            <div className='boardmember-designation'>
                                {profile.domin}
                                {/* <div>MMMUT Foundation</div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Teamcards