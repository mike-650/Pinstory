import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { grabUser } from '../../store/session'
import { useState } from 'react'
import { thunkAllPins } from '../../store/pin'
import UserPins from './UserPins'
import './ProfilePage.css'

function ProfilePage() {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [ createClass, setCreateClass] = useState('PP-create-class-default');
  const [ savedClass, setSavedClass] = useState('PP-save-class-selected');
  const [ createdPage, setCreatedPage ] = useState(false);
  const [ savedPage, setSavedPage ] = useState(true);
  const currUser = useSelector(state => state.session.user);
  const user = useSelector(state => state.session.singleUser);

  useEffect( async () => {
    dispatch(thunkAllPins())
    const res = await dispatch(grabUser(userName))
      if (res.errors) {
        return history.push('/not-found')
      }
  }, [dispatch])

  const switchPage = () => {
    if (savedPage) {
      setSavedPage(false)
      setSavedClass('PP-save-class-default')
      setCreateClass('PP-create-class-selected')
      setCreatedPage(true)
    } else {
      setCreatedPage(false)
      setCreateClass('PP-create-class-default')
      setSavedClass('PP-save-class-selected')
      setSavedPage(true)
    }
  }

  return (
    <div>
      <div className="PP-Top-Section">
        <img className='PP-profile-picture' src={user?.profilePicture || 'https://pinstorybucket.s3.us-west-1.amazonaws.com/default.png'} alt='Profile Picture' />
        <h1>{user?.firstName} {user?.lastName}</h1>
        <p>@{user?.username}</p>
        {/* Conditionally render Edit Profile button if logged user is on their own prof page */}
        { currUser?.id == user?.id && <button onClick={() => alert('Under Construction!')}>Edit Profile</button> }
        <div className='PP-created-saved'>
        <h4 className={createClass} onClick={switchPage}>Created</h4>
        <h4 className={savedClass} onClick={switchPage}>Saved</h4>
        </div>
        { createdPage && <UserPins userId={user.id}/>}
      </div>
    </div>
  )
}


export default ProfilePage
