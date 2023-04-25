import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useRef } from "react";
import './RemovePin.css'
import { thunkRemovePinFromBoard } from "../../../store/board";

function RemovePinModal({ pinId, boardId }) {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const [menu, setMenu] = useState('DB-Modal RP-Modal');
  const [ modal, setModal ] = useState('modal');
  const [ modalBackground, setModalBackground ] = useState('modal-background');
  const [ modalContent, setModalContent ] = useState('modal-content');

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

  const handleClick = () => {
    setMenu('hidden')
    setModal('hidden')
    setModalBackground('hidden')
    setModalContent('hidden')
  }

  const handleRemovePin = (e, pinId) => {
    e.preventDefault();
    dispatch(thunkRemovePinFromBoard(pinId, boardId))
    handleClick();
    return;
  }

  return (
    <div id={modal} className={menu}>
      <div id={modalBackground} />
      <div id={modalContent} className="RP-content" ref={dropdownRef}>
      <h2>Remove pin?</h2>
      <p style={{ fontSize: '14px' }}>Once you remove a pin, you can't undo it!</p>
      <div className='DP-cancel-delete-buttons'>
        <button id='DP-cancel-button' onClick={() => handleClick()}>Cancel</button>
        <button id='DP-delete-button' onClick={(e) => handleRemovePin(e, pinId)}>Delete</button>
      </div>
      </div>
    </div>
  )

}

export default RemovePinModal
