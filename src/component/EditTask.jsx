import React, { useState } from 'react'
import Modal from 'react-modal/lib/components/Modal';
import { useDispatch } from 'react-redux';
import { handleEdit } from '../redux/action';

const EditTask = ({task}) => {
  const [text, setText] = useState(task.action);
  const dispatch = useDispatch() ;
  const handelSubmit=(e)=>{
    e.preventDefault();
    const editedTask={...task,action:text};
    dispatch(handleEdit(editedTask))
    closeModal();

}
  
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
           <button onClick={openModal}>Edit </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <form  onSubmit={handelSubmit}>
          <input type="text" value={text} onChange={e=>setText(e.target.value)} />
          <button>confirme</button>
          <button onClick={closeModal}>cancel</button>
        </form>
      </Modal>
    </div>
  )
}

export default EditTask