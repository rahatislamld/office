// MessageList.js
import React from "react";
import { List, makeStyles } from "@material-ui/core";
import Message from "./Message"; // Import the Message component

const useStyles = makeStyles((theme) => ({
  messageList: {
    overflow: "auto",
    maxHeight: "70vh",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    padding: "8px",
  },
}));

function MessageList({ messages }) {
  const classes = useStyles();

  return (
    <List className={classes.messageList}>
      {messages.map((msg) => (
        <Message key={msg.id} message={msg} />
      ))}
    </List>
  );
}

export default MessageList;
