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
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});
	const { closeModal } = useModal();

	const handleSubmit = async (e) => {
		e.preventDefault();
		let err = {};

		if (username.length < 5 || username.length > 20) err.username = 'Username must be between 5 and 20 characters.';
		if (password.length < 6) err.password = 'Password must be at least 6 characters.';
		if (Object.values(err) > 0) return setErrors(err);

		if (password === confirmPassword) {
			const data = await dispatch(signUp(username, email, password));
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
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
					placeholder="Email"
					className="SU-input-fields"
				/>
				{errors.email ? <span style={{ color: 'red', fontSize: '12px' }}>{errors.email}</span> : null}
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
