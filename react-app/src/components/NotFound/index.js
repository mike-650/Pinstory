import { NavLink } from 'react-router-dom'

import './NotFound.css'

function NotFound() {
  return (
    <>
      <div className='Not-found-container'>
      <h1>404</h1>
      <p>Sorry, we couldn't find this page. But don't worry, you can discover amazing pins on our <NavLink to={'/browse'} className={'Not-found-link'} >homepage</NavLink>.</p>
        <img className='Not-found-image' src='https://pinstorybucket.s3.us-west-1.amazonaws.com/404.jpeg' alt='404 page'></img>
      </div>
    </>
  )
}

export default NotFound
