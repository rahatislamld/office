// frontend/pages/user/profile.js
import { Container, Typography, Avatar } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";

function UserProfile() {
  const { user } = useAuth();

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Profile
      </Typography>
      <Avatar
        src="/path-to-image.jpg"
        alt={user ? user.name : "Guest"}
        style={{ width: "80px", height: "80px", marginBottom: "20px" }}
      />
      <Typography variant="h6">{user ? user.name : "Guest"}</Typography>
      {/* Add more profile details here */}
    </Container>
  );
}

export default UserProfile;
