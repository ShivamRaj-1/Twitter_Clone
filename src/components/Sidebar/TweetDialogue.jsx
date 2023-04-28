import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";

import "./TweetDialogue.css";

export default function FormDialog({ open, handleClose }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <p className="Cross" onClick={handleClose}>
          ❌
        </p>
        <DialogContent>
          <div style={{ display: "flex" }}>
            <img
              height="50px"
              src="https://img.freepik.com/premium-vector/businessman-avatar-cartoon-character-profile_18591-50581.jpg"
            />

            <textarea
              type="text"
              className="tweetBoxInput"
              placeholder="What's happenig?"
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Tweet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
