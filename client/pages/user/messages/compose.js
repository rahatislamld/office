// frontend/pages/user/messages/compose.js
import { Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

function ComposeMessage() {
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    // Handle message submission logic here
    alert("Message sent!"); // Placeholder
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Compose a Message
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message here..."
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        style={{ marginTop: "20px" }}
      >
        Send
      </Button>
    </Container>
  );
}

export default ComposeMessage;
