// frontend/pages/user/calendar.js
import { Container, Typography, Paper } from "@mui/material";

function UserCalendar() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Calendar
      </Typography>
      <Paper
        elevation={3}
        style={{
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6">Calendar Placeholder</Typography>
      </Paper>
    </Container>
  );
}

export default UserCalendar;
