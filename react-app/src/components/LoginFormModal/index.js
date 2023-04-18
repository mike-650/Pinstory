import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useModal } from "../../context/Modal";
import logo from "../../images/pinstory-icon.png"

import "./LoginForm.css";


function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal();
        history.push('/browse');
    }
  };

  const handleDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login('demo@aa.io', 'password'))

    setEmail('demo@aa.io');
    setPassword('password');

    setTimeout(() => {
      if (data) {
        setErrors(data);
      } else {
        closeModal();
        history.push('/browse');
      }
    }, 1000)
  }

  return (
    <div className="LG-modal-container">
      <img src={logo} alt='pinstory logo' id='home-icon' className="LG-icon"></img>
      <h1 style={{marginBottom:"0"}}>Welcome to Pinstory</h1>
      <form onSubmit={handleSubmit} className="LG-modal-form">
        <ul>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <label/>
          Email
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            className="LG-input-fields"
          />
        <label/>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Password"
            className="LG-input-fields"
          />

        <button type="submit" className="LG-button">Log In</button>
        <div style={{display:'flex', justifyContent:'center', fontWeight:'bold'}}>OR</div>
      </form>
        <button className="LG-button" style={{width:"60%"}} onClick={(e) => handleDemo(e)}>Demo User</button>
    </div>
  );
}

export default LoginFormModal;
