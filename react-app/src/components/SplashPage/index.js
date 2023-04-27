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

	const mainText = ['anime binge idea', 'weeknight dinner idea', 'new look outfit', 'k-pop group'];
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
		}, 5000);

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
						<>
							<img
								key={i}
								src={urls[0]}
								alt={`test-${i}`}
								id='img1'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
							<img
								key={i}
								src={urls[1]}
								alt={`test-${i}`}
								id='img2'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
							<img
								key={i}
								src={urls[2]}
								alt={`test-${i}`}
								id='img3'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
							<img
								key={i}
								src={urls[3]}
								alt={`test-${i}`}
								id='img4'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
							<img
								key={i}
								src={urls[4]}
								alt={`test-${i}`}
								id='img5'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
							<img
								key={i}
								src={urls[5]}
								alt={`test-${i}`}
								id='img6'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
							<img
								key={i}
								src={urls[6]}
								alt={`test-${i}`}
								id='img7'
								className={i === currentText ? "fade-out-images" : "hidden"}
							/>
						</>
					))}
				</div>
		</>
	);
}

export default SplashPage;
