import { useRef, useState, useEffect } from 'react';
import OpenModalButton from '../../OpenModalButton';
import DeleteBoardModal from './DeleteBoardModal'
import './BoardOptions.css'
import EditBoardModal from './EditBoardModal';
import { useParams } from 'react-router-dom';

function BoardOptionsMenu() {
  const dropdownRef = useRef(null);
  const [menu, setMenu] = useState('BO-dropdown-menu');

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenu('hidden')
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };

  }, [dropdownRef])

  return (
    <div className={menu} ref={dropdownRef}>
      <div className='BO-inner-container'>
          <h5>Board Options</h5>
          <OpenModalButton
            buttonText="Edit Board"
            modalComponent={<EditBoardModal />}
            className={'EB-modal-button'}
          />
          <OpenModalButton
            buttonText="Delete Board"
            modalComponent={<DeleteBoardModal />}
            className={'DB-modal-button'}
          />
      </div>
    </div>
  )
}

export default BoardOptionsMenu
