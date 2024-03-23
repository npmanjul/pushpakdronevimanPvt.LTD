import React from 'react';
import './objective.css';

const Objective = () => {
    function myFunction() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myBtn");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Read more";
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Read less";
          moreText.style.display = "inline";
        }
      }
    return (
        <>
            <div className='objective-container'>
                <div className='objective-box'>
                    <div className='main-heading'>
                        Objective
                    </div>
                    <div className='subheading'>
                        Educational Empowerment:
                    </div>
                    <div className='objective-contant'>
                        Provide specialized training programs to educational
                        institutions, equipping students with the skills and
                        knowledge needed for drone technology in agriculture.Foster a culture of innovation and
                        sustainability through educational partnerships and workshops.
                    </div>


                    <div className='subheading'>
                        Testing and Repair Services:
                    </div>
                    <div className='objective-contant'>
                        Offer reliable and efficient testing services for
                        drones, ensuring optimal performance and compliance with
                        industry standards.
                        Establish a state-of-the-art repair facility to address the maintenance and repair needs
                        of drones, minimizing
                        downtime for agricultural operations. 
                    </div> <span id="dots"></span><span id="more">
                   

                    <div className='subheading'>
                        Design and Assembly of Cost-Effective Drones:
                    </div>
                    <div className='objective-contant'>
                        Innovate and develop cost-effective drone solutions
                        tailored specifically for agricultural applications.
                        Collaborate with research and development teams to stay at the forefront of drone
                        technology, incorporating
                        advancements to enhance efficiency and effectiveness
                    </div>


                    <div className='subheading'>
                        Sustainable Agriculture Integration:
                    </div>
                    <div className='objective-contant'>
                        Promote the use of drones for precision agriculture,emphasizing sustainable and environmentally friendly practices.Advocate for the adoption of drone technology to optimize resource use, reduce environmental impact, and increase overall agricultural productivity.
                    </div>


                    <div className='subheading'>
                        Community Engagement:
                    </div>
                    <div className='objective-contant'>
                        Actively engage with local communities to raise
                        awareness about the benefits of drone technology in
                        agriculture.
                        Facilitate outreach programs to demonstrate the positive impact of drones on farming
                        practices and rural
                        economies.
                    </div>


                    <div className='subheading'>
                        Partnerships and Collaboration:
                    </div>
                    <div className='objective-contant'>
                        Establish strategic partnerships with educational
                        institutions, government agencies, and industry stakeholders
                        to create a collaborative ecosystem.
                        Work closely with farmers, agritech companies, and other stakeholders to co-create
                        solutions that address
                        specific agricultural challenges.
                    </div>

                    <div className='subheading'>
                        Continuous Improvement:
                    </div>
                    <div className='objective-contant'>
                        Implement a continuous improvement mindset,
                        regularly updating training programs, testing protocols, and drone
                        designs to stay ahead in the rapidly evolving field of drone technology.
                    </div>

                </span>
                <button onClick={myFunction} id="myBtn">Read more</button>
                </div>
            </div>
        </>
    )
}

export default Objective