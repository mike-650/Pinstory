import './DeletePinModal.css'

function DeletePinModal() {

  return (
    <div className='DP-Modal'>
      <h2>Are you sure?</h2>
      <h4>Once you delete a pin, you can't undo it!</h4>

      <div>Cancel</div>
      <div>Delete Forever</div>

    </div>
  )
}

export default DeletePinModal
