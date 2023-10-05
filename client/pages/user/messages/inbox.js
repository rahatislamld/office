// frontend/pages/user/messages/inbox.js
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

function UserInbox() {
  const [messages, setMessages] = useState([
    { id: 1, title: "Sample Message" },
    // ... Add more sample messages here
  ]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Inbox
      </Typography>
      <List>
        {messages.map((message) => (
          <ListItem key={message.id}>
            <ListItemText primary={message.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserInbox;
