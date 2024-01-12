import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { animeImgs, foodImgs, kpopImgs, outfitImgs } from './imageArrays';
import ProfileButton from './ProfileButton';
import logo from '../../images/pinstory-icon.png'

import './SplashPage.css';

function SplashPage() {
	const sessionUser = useSelector(state => state.session.user);
	const [currentText, setCurrentText] = useState(0);
	const [randomColor, setRandomColor] = useState({ color: 'rgb(255, 0, 0)' });

	useEffect(() => {
    // Add the class to disable scrolling when the component mounts
    document.body.classList.add('splash-page');

    // Optionally, you can remove the class when the component unmounts
    return () => {
      document.body.classList.remove('splash-page');
    };
  }, []);

	const mainText = ['anime binge idea', 'weekend dinner idea', 'new look outfit', 'k-pop group'];
	const imageArrays = [
		animeImgs,
		foodImgs,
		outfitImgs,
		kpopImgs
	];

	useEffect(() => {
		const intervalId = setInterval(() => {
			// * Callback sets the currentext + 1 every iteration and then % 4 to reset the
			// * currentText back to 0
			setCurrentText(currentText => (currentText + 1) % mainText.length);
			setRandomColor({ color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` });
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
					Find your next
				</h1>
			</div>
			<div className='SP-main-text'>
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
			<div className="SP-images">
				{imageArrays.map((urls, i) => (
					<div key={i}>
						{urls.map((url, j) => (
							<img
								key={`${i}-${j}`}
								src={url}
								alt={`test-${i}`}
								id={`img${j + 1}`}
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
						))}
					</div>
				))}
			</div>
		</>
	);
}

export default SplashPage;
