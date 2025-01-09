import React from 'react'
import HomeSlider from "./HomeSlider"
import HomeShop from "./HomeShop"
import HomeBestSeller from './HomeSeller'
import HomeBrand from './HomeBrand'
import './style.scss'
const Home = () => {
  return (
    <>
        <HomeSlider/>
        <HomeShop/>
        <HomeBestSeller/>
        <HomeBrand />
    </>
  )
}

export default Home