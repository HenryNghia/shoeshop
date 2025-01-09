import React from 'react';
import './style.scss';
import women from '../../../../components/images/women.png'
import man from '../../../../components/images/man.jpg'
import { Row, Col } from 'antd'
const HomeShop = () => {
    return (
        <>
            <div className='shop-wrapper container'>
                <h1 className='shop-wrapper__title'>shop collection</h1>

                <div className="shop-content">
                    <div className='shop-content__men'>
                        <img src={man} alt="men" className='shop-content__men__image' />
                        <h1 className='shop-content__men__title'>men's shop collection</h1>
                    </div>
                    <div className="shop-content__women">
                        <img src={women} alt="women" className='shop-content__women__image' />
                        <h1 className='shop-content__women__title'>woman's shop colection</h1>
                    </div>
                </div>

            </div>
    

        </>
    )
}

export default HomeShop