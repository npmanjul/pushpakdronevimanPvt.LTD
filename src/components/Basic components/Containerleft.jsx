import React from 'react';
import './container.css';
import { Link } from 'react-router-dom';

const Container = (props) => {
    return (
        <>
            <div className='main-container main-container-left'>
                <div className='image-box'>
                <img src={props.img} alt='image'/>
                </div>
                <div className='contant-box-left contant-box'>
                    <div className='contant-heading'>
                    {props.headingtitle}
                    </div>
                    <div className='text-contant'>
                    {props.textcontent}
                    </div>

                    <div className='container-btn-left container-btn'>
                        <div className='btn btn1'>
                            <Link to={props.knowMore}><button>Know More..</button></Link>
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