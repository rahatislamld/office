// Footer.js
import { Container, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(3, 0),
  },
  link: {
    color: "white",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="sm">
        <Typography variant="body1" align="center">
          © 2023 My Web App, All Rights Reserved.
        </Typography>
        <Typography variant="body2" align="center">
          <Link className={classes.link} href="#">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link className={classes.link} href="#">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </footer>
  );
}

export default Footer;
