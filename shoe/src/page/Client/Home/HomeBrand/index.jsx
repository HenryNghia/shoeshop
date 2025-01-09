import React from 'react'
import brand1 from '../../../../components/images/brand-1.jpg';
import brand2 from '../../../../components/images/brand-2.jpg';
import brand3 from '../../../../components/images/brand-3.jpg';
import brand4 from '../../../../components/images/brand-4.jpg';
import brand5 from '../../../../components/images/brand-5.jpg';
import './style.scss';

const HomeBrand = () => {
    return (
        <>
            <div className='brand-container'>
                <div className='wrapper'>
                    <div className='title'>partnership</div>
                    <div className='brand'>
                        <div className='brand__item'>
                            <img src={brand1} alt="" className='brand__item__image' />
                        </div>
                        <div className='brand__item'>
                            <img src={brand2} alt="" className='brand__item__image' />
                        </div>
                        <div className='brand__item'>
                            <img src={brand3} alt="" className='brand__item__image' />
                        </div>
                        <div className='brand__item'>
                            <img src={brand4} alt="" className='brand__item__image' />
                        </div>
                        <div className='brand__item'>
                            <img src={brand5} alt="" className='brand__item__image' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBrand