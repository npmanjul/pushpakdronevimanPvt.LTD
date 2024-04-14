import React from 'react';
import './shoppingcards.css';
import buynow from '../../Basic components/icon/buy-on-amazon-droni-drone.png'

const ShoppingCards = (props) => {
    return (
        <>

            <div className='shopping-card-container'>
                <div className='shopping-image-container'>
                    <img src={props.imgsrc} alt='img' />
                </div>
                <div className='shopping-product-heading'>
                    {props.title}
                </div>
                <div className='shopping-box-btn-price'>
                    <div className='shopping-buynow-button'>

                        <a href={props.amazonproduct}><img src={buynow} alt='button' /></a>
                    </div>
                    <div className='shopping-price-box'>
                        {props.price}
                    </div>

                </div>
            </div>

        </>
    )
}

export default ShoppingCards;