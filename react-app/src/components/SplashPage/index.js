import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/pinstory-icon.png'
import './SplashPage.css';

function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);

	// const mainText = ['weeknight dinner idea', 'home decor idea', 'green thumb idea', 'new look outfit']

	return (
		<>
			<ul className='NV-navbar-container'>
				<NavLink exact to="/" className="NV-home-link">
					<img src={logo} alt='Pinstory Icon' id='home-icon' />
					Pinstory
				</NavLink>
				<ProfileButton user={sessionUser} />
			</ul>
			<div className="SP-static-text">
				<h1>
					Get your next
				</h1>
			</div>
			<div className='SP-main-text'>
				{/* <h1 className='Splash-swap-text-1' style={{ color: 'green' }}>
					weeknight dinner idea
				</h1> */}
				{/* <h1 className='Splash-swap-text-2' style={{ color: 'green' }}>
					home decor idea
				</h1> */}
				{/* <h1 className='Splash-swap-text-3' style={{ color: 'green' }}>
					green thumb idea
				</h1> */}
				<h1 className='Splash-swap-text-4' style={{ color: 'rgb(34, 118, 204)'}}>
					new look outfit
				</h1>
			</div>
		</>
	);
}

export default SplashPage;
