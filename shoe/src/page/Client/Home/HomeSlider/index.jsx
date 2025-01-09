import React, { useState } from 'react';
import { Carousel } from 'antd';
import './style.scss';
import slider1 from "../../../../components/images/carousel1.jpg";
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleBeforeChange = (from, to) => {
        // Set the current slide to the one that will be active
        setCurrentSlide(to);
    }
    return (
        <>
            <Carousel autoplay autoplaySpeed={3000} speed={2000} arrows beforeChange={handleBeforeChange}>
                <div className='slider'>
                    <img src={slider1} alt="slider" />
                    <div className="slider__caption">
                        <div className="slider__content container">
                            <h1 className='slider__content__title'>take off 50%</h1>
                            <p className='slider__content__title'>nike air force one</p>
                            <button className="slider__content__button">
                                <a href="#" >buy now</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='slider'>
                    <img src={slider1} alt="slider" />
                    <div className="slider__caption">
                        <div className="slider__content container">
                            <h1 className='slider__content__title'>take off 50%</h1>
                            <p className='slider__content__title'>nike air force one</p>
                            <button className="slider__content__button">
                                <a href="#" >buy now</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='slider'>
                    <img src={slider1} alt="slider" />
                    <div className="slider__caption">
                        <div className="slider__content container">
                            <h1 className='slider__content__title'>take off 50%</h1>
                            <p className='slider__content__title'>nike air force one</p>
                            <button className="slider__content__button">
                                <a href="#" >buy now</a>
                            </button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default Slider