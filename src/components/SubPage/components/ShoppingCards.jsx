import React from 'react';
import './shoppingcards.css';
import buynow from '../../Basic components/icon/buy-on-amazon-droni-drone.png'
import shopdata from '../subpage data/Product Data/Shoppingdata';

const ShoppingCards = (props) => {
    return (
        <>
        {shopdata.map(function (data) {
        return (
            <div className='shopping-card-container'>
                <div className='shopping-image-container'>
                    <img src={data.productimg} alt='img' />
                </div>
                <div className='shopping-product-heading'>
                    {data.productname}
                </div>
                <div className='shopping-box-btn-price'>
                    <div className='shopping-buynow-button'>

                        <a href={data.amazonproduct}><img src={buynow} alt='button' /></a>
                    </div>
                    <div className='shopping-price-box'>
                        {data.productprice}
                    </div>

                </div>
            </div>
        )
      })}
        </>
    )
}

export default ShoppingCards;