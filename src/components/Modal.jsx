import { createPortal } from "react-dom";
import Button from "./Button";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const modalDialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalDialog.current.showModal();
      },
      close() {
        modalDialog.current.close();
      },
    };
  });

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        modalDialog.current.close();
      }
    });
  }, [modalDialog]);

  return createPortal(
    <dialog
      ref={modalDialog}
      className="absolute top-[5%] md:top-1/2 border-2 p-2 rounded-md"
    >
      {children}
      <form method="dialog">
        <Button className="w-full text-lg md:text-2xl">Close</Button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default Modal;
