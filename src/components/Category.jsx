import React from 'react';
import ProductCard from './Product';
import freshFlowersImage from '../assets/Home/card item-2.svg';
import driedFlowersImage from '../assets/Home/card item.svg';
import livePlantsImage from '../assets/Home/card item-3.svg';
import aromaCandlesImage from '../assets/Home/card item-1.svg';
import freshenersImage from '../assets/Home/card item-4.svg';

function Category() {
    return (
        <>
            <h1 className='sticky top-0 h-auto w-[50%] flex justify-center items-center text-wrap font-sans font-semibold text-6xl float-left pt-20'>
                Choose a Сategory
            </h1>

            <div className=' page2 w-[50%] float-right font-Gilroy'>
                <ProductCard path="/freshflowers" title="Fresh Flowers" imageSrc={freshFlowersImage} />
                <ProductCard path="/dried" title="Dried Flowers" imageSrc={driedFlowersImage} />
                <ProductCard path="/live" title="Live Plants" imageSrc={livePlantsImage} />
                <ProductCard path="/aroma" title="Aroma Candles" imageSrc={aromaCandlesImage} />
                <ProductCard path="/fresheners" title="Fresheners" imageSrc={freshenersImage} />
            </div>
        </>
    );
}

export default Category;
