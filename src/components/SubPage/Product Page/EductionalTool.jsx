import React from 'react';
import './shoppingPage.css';
import Blank from '../../Basic components/Blankspace';
import Heading from '../../Basic components/Heading';
import ShoppingCards from '../components/ShoppingCards';
import shopdata from '../subpage data/Product Data/Shoppingdata';

const EductionalTool = () => {
    return (
        <>
            <Blank />
            <Heading heading={"Customised Object"} />
            {shopdata.map(function (data) {
                return (
                    <div className='shopping-card-conatainer'>
                        <ShoppingCards imgsrc={data.productimg} title={data.productname} price={data.productprice} btnlink={data.amazonproduct} />
                    </div>
                )
            })}
        </>
    )
}

export default EductionalTool