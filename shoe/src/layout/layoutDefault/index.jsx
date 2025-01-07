import Header from './Header'
import Footer from './Footer'
import React from 'react'
import "./style.scss"
import { Outlet } from 'react-router-dom'

const LayoutDefault = () => {
	return (
		<>
			<Header />
			<main className='layout-default__main'>
				<Outlet />
			</main>
			<Footer />
		</>
	)
}

export default LayoutDefault