import { NavLink } from 'react-router-dom';
import logo from '../images/pinstory-icon.png'
import './Navigation.css'

function Navigation() {
  return (
    <div className='NV-container'>
      <img src={logo} alt='Pinstory Logo' style={{height:'25px', width:'25px'}}/>
      <NavLink to={'/'}>Lol</NavLink>
    </div>
  )
}

export default Navigation;
