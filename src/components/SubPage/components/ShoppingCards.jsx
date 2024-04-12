import React from 'react';
import './shoppingcards.css';
import buynow from '../../Basic components/icon/buy-on-amazon-droni-drone.png'

const ShoppingCards = () => {
    return (
        <>
            <div className='shopping-card-container'>
                <div className='shopping-image-container'>
                    <img src='https://img.freepik.com/free-photo/quadcopter-flying-nature_231208-10459.jpg' alt='img' />
                </div>
                <div className='shopping-product-heading'>
                    Heading
                </div>
                <div className='shopping-buynow-button'>
                    <img src={buynow} alt='button' />
                </div>
            </div>
        </>
    )
}

export default ShoppingCards;