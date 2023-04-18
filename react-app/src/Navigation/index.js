import { NavLink } from 'react-router-dom';
import logo from '../images/pinstory-icon.png'
import './Navigation.css'

function Navigation() {
  return (
    <div className='NV-container'>
      <div className='NV-left-section'>
        <img src={logo} alt='Pinstory Logo' style={{ height: '25px', width: '25px' }} />
        <NavLink to={'/browse'} className='NV-home-link'>Home</NavLink>
        <p>Create</p>
      </div>
      <form className='NV-search-bar-container' onSubmit={() => alert('Feature Coming Soon!')}>
          <i class="fa-solid fa-magnifying-glass fa-sm" id='NV-search-icon'></i>
          <input type='search' placeholder='Search' id='NV-search-bar' />
      </form>
      <div>
        <p>Profile</p>
      </div>
    </div>
  )
}

export default Navigation;
