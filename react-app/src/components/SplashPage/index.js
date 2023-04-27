import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import logo from '../../images/pinstory-icon.png'

import './SplashPage.css';

function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);
	const [currentText, setCurrentText] = useState(0);
	const [randomColor, setRandomColor] = useState({color: 'rgb(255, 0, 0)'});

	const mainText = ['weeknight dinner idea', 'home decor idea', 'green thumb idea', 'new look outfit'];

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentText(currentText => (currentText + 1) % mainText.length);
			setRandomColor({color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`});

		}, 6000);
		return () => clearInterval(intervalId);
	}, [mainText.length]);


	return (
		<>
			<ul className='NV-navbar-container'>
				<NavLink exact to="/" className="NV-home-link">
					<img src={logo} alt='Pinstory Icon' id='home-icon' />
					<p>Pinstory</p>
				</NavLink>
				<ProfileButton user={sessionUser} />
			</ul>
			<div className="SP-static-text">
				<h1>
					Get your next
				</h1>
			</div>
			<div className='SP-main-text'>
				{/* <h1 className={text1} style={{color: 'rgb(189, 140, 48)'}}>
					weeknight dinner idea
				</h1>
				<h1 className={text2} style={{color: 'rgb(104, 139, 124)'}}>
					home decor idea
				</h1> */}
				{/* <h1 className='Splash-swap-text-3' style={{color: 'rgb(76, 121, 90)'}}>
					green thumb idea
				</h1> */}
				{/* <h1 className='Splash-swap-text-4' style={{color: 'rgb(34, 118, 204)'}}>
					new look outfit
				</h1> */}
				{mainText.map((text, index) => (
      <h1
        key={index}
        className={index === currentText ? 'fade-out-up' : ' hidden'}
				style={randomColor}
      >
        {text}
      </h1>
    ))}
			</div>
		</>
	);
}

export default SplashPage;
