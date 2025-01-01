import React from 'react'
import { Row, Col } from "antd";
import './style.scss'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='top-menu'>
                        <Row className='top-menu__group'>
                            <Col span={16} className='top-menu__group__logo'>
                                <img src="https://static.vecteezy.com/system/resources/previews/010/994/330/non_2x/nike-logo-name-black-clothes-design-icon-abstract-football-illustration-with-white-background-free-vector.jpg" alt="" />
                            </Col>
                            <Col span={8} className='top-menu__group__search'>
                                <input type="text" className='text-search' placeholder='Search' />
                                <button className='button-search'><FaSearch /></button>
                            </Col>
                        </Row>
                        <Row className='top-menu__nav'>
                            <Col span={16} className='top-menu__nav__menu'>
                                <ul className='menu-item'>
                                    <li className='item'><a href="/">HOME</a></li>
                                    <li className='item'><a href="/">MEN</a></li>
                                    <li className='item'><a href="/">Woman</a></li>
                                    <li className='item'><a href="/">About</a></li>
                                    <li className='item'><a href="/">Contact</a></li>
                                </ul>
                            </Col>
                            <Col span={8} className='top-menu__nav__cart'>
                                <FaCartShopping className='icon-cart'/>
                                <label htmlFor="" className='cart'> Cart [<span>0</span>] </label>
                                
                            </Col>
                        </Row>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Header