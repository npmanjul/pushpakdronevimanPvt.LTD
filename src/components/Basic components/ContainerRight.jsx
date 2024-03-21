import React from 'react';
import './container.css';

const Container = (props) => {
    return (
        <>
            <div className='main-container main-container-right'>
                <div className='image-box'>
                <img src={props.img} alt='image'/>
                </div>
                <div className='contant-box-right contant-box'>
                    <div className='contant-heading'>
                    {props.headingtitle}
                    </div>
                    <div className='text-contant'>
                    {props.textcontent} 
                    </div>

                    <div className='container-btn-right container-btn'>
                        <div className='btn btn1'>
                            <button>Know More..</button>
                        </div>
                        <div className='btn btn2'>
                        <button>Enquary</button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Container