// Modal.js
import { Modal as MuiModal, Backdrop, Fade, Paper } from "@material-ui/core";
import { useState } from "react";

function useModal(defaultState = false) {
  const [open, setOpen] = useState(defaultState);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return [open, handleOpen, handleClose];
}

function Modal({ children }) {
  const [open, , handleClose] = useModal();

  return (
    <MuiModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
    >
      <Fade in={open}>
        <Paper
          style={{
            outline: "none",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: "20px",
          }}
        >
          {children}
        </Paper>
      </Fade>
    </MuiModal>
  );
}

export default Modal;
export { useModal }; // Exporting the hook so other components can utilize it.
