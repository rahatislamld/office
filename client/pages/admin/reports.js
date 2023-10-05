import { Container, Typography, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    backgroundColor: theme.palette.grey[50],
    boxShadow: theme.shadows[5],
  },
}));

export default function Reports() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        View Reports
      </Typography>
      <Paper className={classes.paper} elevation={3}>
        {/* Here, you'd integrate a charting library or display data tables */}
      </Paper>
    </Container>
  );
}
