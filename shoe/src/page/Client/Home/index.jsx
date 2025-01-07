import React, { useState } from 'react';
import { Carousel } from 'antd';
import './style.scss'
const Home = () => {
    const [dotPosition, setDotPosition] = useState('bottom');
    return (
        <>
            <Carousel autoplay autoplaySpeed={10000}  arrows dotPosition={dotPosition} className='casuael'>
                <div className='group-image'>
                    <img src="https://img1-cdn.halftime.pt/2022/04/11/e/8/e8f112f491873ac9.jpg" alt="" className='group-image__item' />
                </div>
                <div className='group-image'>
                    <img src="https://authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp" alt="" className='group-image__item'/>
                </div>
                <div className='group-image'>
                    <img src="https://authentic-shoes.com/wp-content/uploads/2023/09/image-54-2048x711-2.webp" alt="" className='group-image__item'/>
                </div>
            </Carousel>
        </>
    )
}

export default Home