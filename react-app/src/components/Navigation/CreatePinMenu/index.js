import { NavLink } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import './CreatePinMenu.css'

function CreatePinMenu() {
  const dropdownRef = useRef(null);
  const [menu, setMenu] = useState('CP-menu-container');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenu('hidden')
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };

  }, [dropdownRef])

  return (
    <div className={menu} ref={dropdownRef}>
      <NavLink to='/new-pin' className='CP-create-link' onClick={() => setMenu('hidden')}>Create Pin</NavLink>
    </div>
  )

}

export default CreatePinMenu
