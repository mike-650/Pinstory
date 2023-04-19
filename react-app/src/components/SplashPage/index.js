import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/pinstory-icon.png'
import './SplashPage.css';

function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<>
		<ul className='NV-navbar-container'>
				<NavLink exact to="/" className="NV-home-link">
					<img src={logo} alt='Pinstory Icon' id='home-icon' />
					Pinstory
				</NavLink>
					<ProfileButton user={sessionUser} />
		</ul>
		<div className='SP-main-text'>
			<h1>
				Get your next
			</h1>
			<h1 style={{color:'green'}}>
				weeknight dinner idea
			</h1>
		</div>
		</>
	);
}

export default SplashPage;
