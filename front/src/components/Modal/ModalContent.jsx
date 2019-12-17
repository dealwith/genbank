import React, { forwardRef } from "react";
import { createPortal } from "react-dom";

export const ModalContent = forwardRef((props, ref) => {
  const {
    role = "dialog",
    ariaLabel,
    content,
    onClose,
    onKeyDown,
    onClickAway
  } = props;

  const { modalRef, buttonRef } = ref;

  return createPortal(
    <section
      aria-modal="true"
      aria-label={ariaLabel}
      role={role}
      className="g-modal-cover"
      tabIndex="-1"
      onKeyDown={onKeyDown}
      onClick={onClickAway}
    >
      <div className="g-modal" ref={modalRef}>
        <button
          className="g-modal__close"
          aria-labelledby="Close Modal"
          onClick={onClose}
          ref={buttonRef}
        >
          <span id="close-modal" className="g-hide-visually">
            Close
          </span>
          <svg className="g-modal__close-icon" viewBox="0 0 40 40">
            <path d="M 10,10 L 30,30 M 30,10 L 10,30"></path>
          </svg>
        </button>
        <div className="g-modal__body">{content}</div>
      </div>
    </section>,
    document.getElementById("modal-root")
  );
});
