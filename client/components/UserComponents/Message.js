// Message.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Avatar,
  Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  messageCard: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#eef2f7",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.06)",
  },
  senderInfo: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  avatar: {
    marginRight: theme.spacing(1),
  },
}));

function Message({ message }) {
  const classes = useStyles();

  return (
    <Card className={classes.messageCard}>
      <CardContent>
        <div className={classes.senderInfo}>
          <Avatar src={message.sender.avatar} className={classes.avatar} />
          <Typography variant="h6">{message.sender.name}</Typography>
          <Chip
            label={message.date}
            size="small"
            variant="outlined"
            style={{ marginLeft: "8px" }}
          />
        </div>
        <Typography variant="body1">{message.body}</Typography>
      </CardContent>
    </Card>
  );
}

export default Message;
