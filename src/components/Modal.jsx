import React from "react";

const Modal = ({ largeImg, handleDelete }) => {
  return (
    <div className="Overlay">
      <div className="Modal">
        <button className="modal_close" onClick={handleDelete}>
          X
        </button>
        <img src={largeImg} alt="img" />
      </div>
    </div>
  );
};

export default Modal;
