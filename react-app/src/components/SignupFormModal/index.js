import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import { signUp } from "../../store/session";
import logo from "../../images/pinstory-icon.png"
import "./SignupForm.css";

function SignupFormModal() {
	const dispatch = useDispatch();
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let err = {};
		username.toLowerCase();
		const emailValidator = require("email-validator");

		if (!emailValidator.validate(email)) err.email = 'Please provide a valid email';
		if (email.length >= 45) err.email = "Email must be less than 45 characters";

		if (firstName.length > 20 || firstName.length < 2) err.firstName = 'First name must be between 2 and 20 characters';

		if (lastName.length > 20 || lastName.length < 2) err.lastName = 'Last name must be between 2 and 20 characters';

		if (username.length < 5 || username.length > 20) err.username = 'Username must be between 5 and 20 characters.';

		if (password.length < 6) err.password = 'Password must be at least 6 characters.';
		
		if (Object.values(err).length) return setErrors(err);

		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password, firstName, lastName));
			if (data) {
				data.forEach(error => {
					if (error.includes('email')) err.email = 'Email address is already in use.';
					if (error.includes('username')) err.username = 'Username is already in use.';
				})
				setErrors(err);
			} else {
				closeModal();
				return history.push('/browse')
			}
		} else {
			err.password = 'Sorry, the passwords you entered do not match. Please try again.'
			setErrors(err);
		}
	};


	return (
		<div className="LG-modal-container">
			<img src={logo} alt='pinstory logo' id='home-icon' className="LG-icon"></img>
			<h1 style={{ margin: '0' }}>Welcome to Pinstory</h1>
			<p style={{ marginTop: '0', fontWeight: '300' }}>Find new ideas to try</p>
			<form onSubmit={handleSubmit} className="LG-modal-form">
				<label />
				Email
				<input
					type="text"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					placeholder="Email"
					className="SU-input-fields"
				/>
				{errors.email ? <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span> : null}
				<label />
				First Name
				<input
					type="text"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
					required
					placeholder="First Name"
					className="SU-input-fields"
				/>
				{errors.firstName ? <span style={{ color: 'red', fontSize: '12px' }}>{errors.firstName}</span> : null}
				<label />
				Last Name
				<input
					type="text"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
					required
					placeholder="Last Name"
					className="SU-input-fields"
				/>
				{errors.lastName ? <span style={{ color: 'red', fontSize: '12px' }}>{errors.lastName}</span> : null}
				<label />
				Username
				<input
					type="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					required
					placeholder="Username"
					className="SU-input-fields"
				/>
				{errors.username ? <span style={{ color: 'red', fontSize: '12px' }}>{errors.username}</span> : null}
				<label />
				Password
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
					placeholder="Password"
					className="SU-input-fields"
				/>
				{errors.password ? <span style={{ color: 'red', fontSize: '12px' }}>{errors.password}</span> : null}
				<label />
				Confirm Password
				<input
					type="password"
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
					required
					placeholder="Confirm Password"
					className="SU-input-fields"
				/>
				<button type="submit" className='SU-button'>Sign Up</button>
			</form>
		</div>
	);
}

export default SignupFormModal;
