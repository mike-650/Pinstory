import { useState } from "react";

import './ClearPinMenu.css'


function ClearPinMenu({setImgFile, setTitle, setDescription}) {
  const [menu, setMenu] = useState('Clear-pin-menu-container');

  const handleClear = () => {
    setMenu('hidden')
    setImgFile(null)
    setTitle('')
    setDescription('')
  }

  return (
    <div className={menu}>
      <p className='Clear-pin-text' onClick={() => handleClear()}>Clear</p>
    </div>
  )
}

export default ClearPinMenu
