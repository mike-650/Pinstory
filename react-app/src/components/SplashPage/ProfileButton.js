import React, { useState, useEffect, useRef } from "react";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";

import './ProfileButton.css'

function ProfileButton() {
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const closeMenu = () => setShowMenu(false);

  const LinkedInLink = (e) => {
    e.preventDefault();
    window.open('https://www.linkedin.com/in/michael-s-688653118/', '_blank');
  };

  const GithubLink = (e) => {
    e.preventDefault();
    window.open('https://github.com/mike-650', '_blank');
  };

  return (
    <div className="PB-login-signup-container">
      <i className="fa-brands fa-github fa-2xl mike-socials" onClick={(e) => GithubLink(e)}></i>
      <i className="fa-brands fa-linkedin fa-2xl mike-socials" onClick={(e) => LinkedInLink(e)}></i>
      <OpenModalButton
        buttonText="Log in"
        onItemClick={closeMenu}
        modalComponent={<LoginFormModal />}
        className={'login-signup-buttons'}
      />
      <OpenModalButton
        buttonText="Sign up"
        onItemClick={closeMenu}
        modalComponent={<SignupFormModal />}
        className={'login-signup-buttons'}
      />
    </div>
  );
}

export default ProfileButton;
