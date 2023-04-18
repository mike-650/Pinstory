import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/pinstory-icon.png'
import './SplashPage.css';

function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);

	return (
		<ul className='NV-navbar-container'>
				<NavLink exact to="/" className="NV-home-link">
					<img src={logo} alt='Pinstory Icon' id='home-icon' />
					Pinstory
				</NavLink>
					<ProfileButton user={sessionUser} />
		</ul>
	);
}

export default SplashPage;
