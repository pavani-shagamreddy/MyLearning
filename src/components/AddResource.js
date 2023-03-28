import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
let l = [];
const AddResource = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [resource, setResource] = useState("");
  const handleAddResource = () => {
    alert(`${title} ,${resource}`);
    l.push({ title: { title }, resource: { resource } });
    console.log(l);
  };
  if (!isOpen) return null;
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{"Add a Resouce"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <label>
            Concept:
            <input
              type="text"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>
          <label>
            Resouce Link:
            <input
              type="text"
              onChange={(event) => {
                setResource(event.target.value);
              }}
            />
          </label>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleAddResource}>Add</Button>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddResource;
