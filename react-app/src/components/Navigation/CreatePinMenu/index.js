import { NavLink } from 'react-router-dom'
import './CreatePinMenu.css'

function CreatePinMenu() {
  return (
    <div className="CP-menu-container">
      <NavLink to='/new-pin' className='CP-create-link'>Create Pin</NavLink>
    </div>
  )
}

export default CreatePinMenu
