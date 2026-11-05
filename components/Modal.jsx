"use client";

import { useEffect, useRef } from "react";

export default function Modal({ open, onClose, children, ...props }) {
  const ref = useRef(null);
  const opener = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) {
      opener.current = document.activeElement;
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function close() {
    onClose();
    if (opener.current?.isConnected) opener.current.focus();
  }

  function backdropClick(event) {
    if (event.target !== event.currentTarget) return;
    const rect = event.currentTarget.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      onClose();
  }

  return (
    <dialog
      ref={ref}
      {...props}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={close}
      onClick={backdropClick}
    >
      {children}
    </dialog>
  );
}
