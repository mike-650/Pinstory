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
      </div>
    </div>
  )
}

export default NewPin
