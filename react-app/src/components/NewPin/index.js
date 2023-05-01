import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dropzone from './Dropzone';
import ClearPinMenu from './ClearPinMenu';


import './NewPin.css'
import { useSelector } from 'react-redux';

function NewPin() {
  const history = useHistory('')
  const [imgFile, setImgFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const [clearMenu, setClearMenu] = useState(false);

  const user = useSelector(state => state.session.user)



  useEffect(() => {
    // Set the background color of the body element to grey
    document.body.style.backgroundColor = 'rgb(233, 233, 233)';
    // Remove the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = null;
    };

  }, []);


  const toggleMenu = () => {
    if (!clearMenu) return setClearMenu(true);
    else return setClearMenu(false)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = {};

    const imageFormat = [
      ".jpg", ".jpeg", ".png", ".gif",
      ".bmp", ".tiff", ".psd", ".ai",
      ".eps", ".svg", ".pdf", ".ico",
      ".raw", ".webp"]

    if (title.length >= 20) err.title = 'Pin Title must be less than 20 characters';
    if (description.length >= 120) err.description = 'Description must be less than 120 characters';

    if (!imgFile) {
      err.imgFile = 'Please provide an image file'
    } else if (!imageFormat.some(ext => imgFile.name.endsWith(ext))) {
      err.imgFile = 'Please provide a valid image file';
    }

    if (Object.values(err).length) return setErrors(err)

    const formData = new FormData();

    formData.append('title', title)
    formData.append('description', description)
    formData.append('imgFile', imgFile)


    const res = await fetch('/api/pins/singlePin', {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      return history.push('/browse');
    } else {
      err.aws = 'There was a problem uploading your pin, please try again later.'
      return setErrors(err)
    }
  }

  return (
    <form className='NP-container' onSubmit={(e) => handleSubmit(e)}>
      <div className='NP-create-pin-box'>
        <div className='NP-create-pin-top-section'>
          <div className='NP-create-ellipsis'>
            <i className="fa-solid fa-ellipsis fa-xl" onClick={toggleMenu}></i>
            {clearMenu && <ClearPinMenu setImgFile={setImgFile} setTitle={setTitle} setDescription={setDescription} setUploadedFile={setUploadedFile} setErrors={setErrors} />}
          </div>
          <div className="NP-save-button">
            <button id='NP-save'>Save</button>
          </div>
        </div>


        <div className='NP-create-pin-middle-section'>
          <div className='NP-create-pin-left-side'>
            <Dropzone
              className='NP-dropzone'
              setImgFile={setImgFile}
              errors={errors}
              uploadedFile={uploadedFile}
              setUploadedFile={setUploadedFile}
            />
          </div>
          <div className='NP-create-pin-right-side'>
            {errors.imgFile && <span className="NP-errors">* {errors.imgFile}</span>}
            {errors.title ? <p className='NP-errors'>*  {errors.title}</p> : null}
            {errors.aws ? <p className='NP-errors'>*  {errors.aws}</p> : null}
            <input
              type='text'
              placeholder='Add your title'
              className='NP-title-field'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            >
            </input>
            <div className='NP-profile-preview'>
              <div className='NP-profile-pic-container'>
                <img src={user.profilePicture || 'https://ih1.redbubble.net/image.1790122233.3876/flat,750x1000,075,f.jpg'} alt='Profile' className='NP-profile-picture'></img>
              </div>
              <div className='NP-first-last-container'>
                <p style={{ marginRight: '5px' }}>{user.firstName}</p>
                <p>{user.lastName}</p>
              </div>
            </div>
            {errors.description ? <p className='NP-errors' style={{marginTop:'30px'}}>* {errors.description}</p> : null}
            <textarea
              type='text'
              placeholder='Tell everyone what your Pin is about'
              className='NP-description-field'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            >
            </textarea>
          </div>
        </div>
      </div>

    </form>
  )
}

export default NewPin
