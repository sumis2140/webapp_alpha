import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { TextField } from '@material-ui/core';
import video from "./video.mp4"
// import { myData } from './list';


export default function FormDialog({ open, handleClose, data, onChange, handleFormSubmit }) {
  const { id } = data

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{id ? "Playing Now" : "Fraction Video Player"}</DialogTitle>
        <DialogContent>
          <iframe width="420" height="315"
            src={video}>
          </iframe>

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="outlined">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleFormSubmit()} variant="contained">
            {id ? "Update" : "Download"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}