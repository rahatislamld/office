// ProfileCard.js
import React from "react";
import { Card, CardContent, Avatar, Typography } from "@material-ui/core";

function ProfileCard({ user }) {
  return (
    <Card style={{ maxWidth: "345px", margin: "0 auto" }}>
      <CardContent align="center">
        <Avatar
          alt={user.name}
          src={user.image}
          style={{ width: "100px", height: "100px", marginBottom: "15px" }}
        />
        <Typography variant="h5">{user.name}</Typography>
        <Typography variant="body1" color="textSecondary">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProfileCard;
