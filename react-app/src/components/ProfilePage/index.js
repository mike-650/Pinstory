import { useDispatch, useSelector } from 'react-redux'
import './ProfilePage.css'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { grabUser } from '../../store/session'

function ProfilePage() {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const currUser = useSelector(state => state.session.user)
  const user = useSelector(state => state.session.singleUser);

  useEffect( async () => {
    const res = await dispatch(grabUser(userName))
      if (res.errors) {
        return history.push('/not-found')
      }
  }, [dispatch])

  return (
    <div>
      <div className="PP-Top-Section">
        <img className='PP-profile-picture' src={user?.profilePicture || 'https://pinstorybucket.s3.us-west-1.amazonaws.com/default.png'} alt='Profile Picture' />
        <h1>{user?.firstName} {user?.lastName}</h1>
        <p>@{user?.username}</p>
        { currUser?.id == user?.id && <button onClick={() => alert('Under Construction!')}>Edit Profile</button> }
      </div>
    </div>
  )
}


export default ProfilePage
