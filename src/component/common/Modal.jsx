import React from 'react'
import { ImCheckmark } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai"
import ReactDOM from "react-dom"

const Modal = ({show, onClose, children}) => {
    if (!show) return null;

    return ReactDOM.createPortal (
      <>
        <div className="modal-overlay">
          <div className="success-modal shadow bg-RfWhite rounded">
            <AiOutlineClose className="close-icon" onClick={onClose} />
            <div className=" text-center mb-3">
              {children}
            </div>
            <ImCheckmark className="check-icon align-center" />
          </div>
        </div>
      </>,
      document.body
    )
}

export default Modal