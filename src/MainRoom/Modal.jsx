import React from 'react';

function Modal(props) {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-overlay" onClick={onClose} />
      <div className="mod -content">{children}</div>
    </div>
  );
}

export default Modal;
