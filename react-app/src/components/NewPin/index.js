import { useEffect } from 'react';

import './NewPin.css'

function NewPin() {

  useEffect(() => {
    // Set the background color of the body element to grey
    document.body.style.backgroundColor = 'rgb(233, 233, 233)';
    // Remove the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = null;
    };
  }, []);
  return (
    <div className='NP-container'>
      <div className='NP-create-pin-box'>
        <div className='NP-create-pin-top-section'>
          <div className='NP-create-ellipsis'>
            <i className="fa-solid fa-ellipsis fa-xl"></i>
          </div>
          <div className="NP-save-button">
            <span>Save</span>
          </div>
        </div>


      <div className='NP-create-pin-middle-section'>
        <div className='NP-create-pin-left-side'>
          Image Upload
        </div>
        <div className='NP-create-pin-right-side'>
          <input
            type='text'
            placeholder='Add your title'
            className='NP-title-field'
          >
          </input>
          <input
            type='text'
            placeholder='Tell everyone what about Pin is about'
            className='NP-description-field'
          >
          </input>
        </div>
        </div>
      </div>

    </div>
  )
}

export default NewPin
