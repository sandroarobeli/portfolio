import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const Alert = ({ show, onClose, message, className }) => {
  const nodeRef = useRef(null);

  const closeOnEscapeKeyDown = (event) => {
    if ((event.charCode || event.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);

    return function cleanup() {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  // Auto deletes the alert
  useEffect(() => {
    const interval = setInterval(() => {
      if (show) {
        onClose();
      }
    }, 2000);

    return function cleanup() {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return createPortal(
    <CSSTransition
      nodeRef={nodeRef}
      in={show}
      unmountOnExit
      timeout={{ enter: 0, exit: 200 }}
    >
      <div className="alert" onClick={onClose} ref={nodeRef}>
        <div className={className} onClick={(event) => event.stopPropagation()}>
          <div className="flex justify-center">
            <h3 className="">{message}</h3>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.body
  );
};
export default Alert;
