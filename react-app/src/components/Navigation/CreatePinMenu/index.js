import { NavLink } from 'react-router-dom'
import './CreatePinMenu.css'
import { useState } from 'react'

function CreatePinMenu() {
  const [menu, setMenu] = useState('CP-menu-container');

  return (
    <div className={menu}>
      <NavLink to='/new-pin' className='CP-create-link' onClick={() => setMenu('hidden')}>Create Pin</NavLink>
    </div>
  )

}

export default CreatePinMenu
