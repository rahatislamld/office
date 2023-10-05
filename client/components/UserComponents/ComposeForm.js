// ComposeForm.js
import React, { useState } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  makeStyles,
  IconButton,
  Divider,
} from "@material-ui/core";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  formContainer: {
    padding: theme.spacing(3),
    borderRadius: "15px",
    boxShadow: "0px 8px 20px -5px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fff",
    margin: theme.spacing(4),
  },
  formHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.spacing(2),
  },
}));

function ComposeForm({ onClose }) {
  const classes = useStyles();
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = () => {
    // Logic for message submission, possibly using an API call.
    console.log({ recipient, subject, body });
    onClose();
  };

  return (
    <Paper className={classes.formContainer}>
      <div className={classes.formHeader}>
        <Typography variant="h6">Compose Message</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <Divider />
      <TextField
        fullWidth
        label="To"
        variant="outlined"
        value={recipient}
        onChange={(e) => setRecipient(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Subject"
        variant="outlined"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        margin="normal"
      />
      <TextField
        fullWidth
        label="Message"
        variant="outlined"
        multiline
        rows={5}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AttachFileIcon />}
        onClick={handleSubmit}
        style={{ marginTop: "16px" }}
      >
        Send
      </Button>
    </Paper>
  );
}

export default ComposeForm;
