// frontend/pages/user/index.js
import { Container, Typography, Paper, Button } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

function UserDashboard() {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome, {user ? user.name : "Guest"}!
      </Typography>
      <Paper elevation={3} style={{ padding: "20px" }}>
        {/* Place dashboard widgets here */}
        <Button variant="contained" color="primary" onClick={logout}>
          Logout
        </Button>
      </Paper>
    </Container>
  );
}

export default UserDashboard;
