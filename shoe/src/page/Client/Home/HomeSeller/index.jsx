import React from 'react'
// import {Row} from 'antd'
import nike from '../../../../components/images/nike1.png'
import { FaCartPlus } from "react-icons/fa";
import './style.scss'
const HomeBestSeller = () => {
    return (
        <>
            {/* <div className="card-container">
                <h1 className='title'>product</h1>
                <div className="card-wrapper">
                    <div className='card'>
                        <div className="card__body">
                            <img src={nike} alt="" className='card__body__image' />
                            <label className='card__body__title'>content</label>
                            <div className='card__body__item'>
                                <label className='card__body__item__price'>160
                                    <span>$</span>
                                </label>
                                <label className='card__body__item__price'><del>200 <span>$</span></del></label>
                            </div>
                            <div className='card__body__item'>
                                <button className='card__body__item__button'>buy now</button>
                                <p className='card__body__item__sale'>off 20%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="card-container">
                <h1 className='title'>product</h1>
                <div className="card-wrapper">
                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                    <a href="/">
                        <div className='card'>
                            <img src={nike} alt="" className='card__image' />
                            <div className="card__body ">
                                <div className='card__body__title '>nike</div>
                                <div className='card__body__item'>
                                    <div className='card__body__item__new'>160
                                        <span>$</span>
                                    </div>
                                    <div className='card__body__item__old'>200<span>$</span></div>
                                </div>
                                <p className='card__body__sale'>off 20%</p>
                                <button className='card__body__button'><a href=""><FaCartPlus /> <span>add to cart</span></a></button>
                            </div>
                        </div>
                    </a>

                </div>
                <button className='button-product'><a href="/" className='button-product__link'>shop all products</a></button>
            </div>
        </>
    )
}

export default HomeBestSeller