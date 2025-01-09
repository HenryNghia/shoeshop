import React from 'react'
import { Row, Col } from 'antd'
import './style.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
const Footer = () => {
     return (
          <>
               <div className='footer'>
                    <div className='footer-container'>
                         <Row className='footer-row'>
                              <Col className='footer-col' span={4}>
                                   <label htmlFor="" className='footer-col__title'>About Footwear</label><br/>
                                   <p className='footer-col__content'>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life</p>
                                   <p>
                                        <div className='footer-col__icon'>
                                             <div className='footer-col__icon__item'><a href="/"><FaFacebookF /></a></div>
                                             <div className='footer-col__icon__item'><a href="/"><FaLinkedin /></a></div>
                                             <div className='footer-col__icon__item'><a href="/"><FaGoogle /></a></div>
                                        </div>
                                   </p>
                              </Col>
                              <Col className='footer-col' span={4}>
                                   <label htmlFor="" className='footer-col__title'>Customer Care</label>
                                   <ul className='footer-col__content'>
                                        <li  className='footer-col__content__item'>Contact</li>
                                        <li  className='footer-col__content__item'>Returns/Exchange</li>
                                        <li  className='footer-col__content__item'>Gift Voucher</li>
                                        <li  className='footer-col__content__item'>Wishlist</li>
                                        <li  className='footer-col__content__item'>Special </li>
                                        <li  className='footer-col__content__item'>Customer Service </li>
                                        <li  className='footer-col__content__item'>site maps</li>
                                   </ul>
                              </Col>

                              <Col className='footer-col' span={4}>
                                   <label htmlFor="" className='footer-col__title'>Information</label>
                                   <ul className='footer-col__content'>
                                        <li  className='footer-col__content__item'>About us</li>
                                        <li  className='footer-col__content__item'>Delivery Information</li>
                                        <li  className='footer-col__content__item'>Privacy Policy</li>
                                        <li  className='footer-col__content__item'>Support</li>
                                        <li  className='footer-col__content__item'>Order Tracking </li>
                                   </ul>
                              </Col>
                              <Col className='footer-col' span={4}>
                                   <label htmlFor="" className='footer-col__title'>News</label>
                                   <ul className='footer-col__content'>
                                        <li  className='footer-col__content__item'>Blog</li>
                                        <li  className='footer-col__content__item'>Press</li>
                                        <li  className='footer-col__content__item'>Exhibitions</li>
                                   </ul>
                              </Col>
                              <Col className='footer-col' span={4}>
                                   <label htmlFor="" className='footer-col__title'>Contact Information</label>
                                   <p className='footer-col__content'>291 South 21th Street,
                                   Suite 721 New York NY 10016</p>
                                   <p className='footer-col__content'>1234567890</p>
                                   <p className='footer-col__content'>info@yoursite.com</p>
                                   <p className='footer-col__content'>yoursite.com</p>
                              </Col>
                         </Row>
                    </div>
               </div>
          </>
     )
}

export default Footer