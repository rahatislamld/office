// pages/index.js
import React from "react";
import { Container, Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.heroContent}>
      <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
        Welcome to My Next.js App
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </Typography>
      <div align="center">
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </div>
    </Container>
  );
}
