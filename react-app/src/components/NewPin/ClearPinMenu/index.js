import { useState, useEffect, useRef } from "react";

import './ClearPinMenu.css'


function ClearPinMenu({setImgFile, setTitle, setDescription, setUploadedFile, setErrors}) {
  const [menu, setMenu] = useState('Clear-pin-menu-container');
  const dropdownRef = useRef(null);

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

  const handleClear = () => {
    setMenu('hidden');
    setImgFile(null);
    setUploadedFile(null);
    setTitle('');
    setDescription('');
    setErrors({});
  }

  return (
    <div className={menu} ref={dropdownRef}>
      <p className='Clear-pin-text' onClick={() => handleClear()}>Clear</p>
    </div>
  )
}

export default ClearPinMenu
