import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Dropzone from './Dropzone';
import ClearPinMenu from './ClearPinMenu';


import './NewPin.css'

function NewPin() {
  const history = useHistory('')
  const [imgFile, setImgFile] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState({});
  const [clearMenu, setClearMenu] = useState(false);



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

    if (title.length >= 30) err.title = 'Pin Title must be less than 30 characters';

    if (!imageFormat.some(ext => imgFile.name.endsWith(ext))) {
        err.imgFile = 'Please provide a valid image file';
    }

    if (Object.values(err).length) return setErrors(err)

    const formData = new FormData();

    formData.append('title', title)
    formData.append('description', description)
    formData.append('imgFile', imgFile)


    const res = await fetch('/api/pins/', {
      method: "POST",
      body: formData,
  });

  if (res.ok) {
      return history.push('/browse');
  } else {
    return;
  }


  }

  return (
    <form className='NP-container' onSubmit={(e) => handleSubmit(e)}>
      <div className='NP-create-pin-box'>
        <div className='NP-create-pin-top-section'>
          <div className='NP-create-ellipsis'>
            <i className="fa-solid fa-ellipsis fa-xl" onClick={toggleMenu}></i>
            {clearMenu && <ClearPinMenu setImgFile={setImgFile} setTitle={setTitle} setDescription={setDescription} />}
          </div>
          <div className="NP-save-button">
            <button id='NP-save'>Save</button>
          </div>
        </div>


        <div className='NP-create-pin-middle-section'>
          <div className='NP-create-pin-left-side'>
            <Dropzone className='NP-dropzone' setImgFile={setImgFile}/>
          </div>
          <div className='NP-create-pin-right-side'>
            { errors.title ? <p style={{color:'red', fontSize:'12px', margin:'4px', textAlign:'left'}}>{errors.title}</p> : null }
            <input
              type='text'
              placeholder='Add your title'
              className='NP-title-field'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
            </input>
            <input
              type='text'
              placeholder='Tell everyone what about Pin is about'
              className='NP-description-field'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </input>
          </div>
        </div>
      </div>

    </form>
  )
}

export default NewPin
