import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  makeStyles,
} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  card: {
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: theme.shadows[8],
    },
    transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Admin Dashboard
      </Typography>
      <Grid container spacing={4}>
        {[
          ["Users", PeopleIcon],
          ["Reports", BarChartIcon],
          ["Settings", SettingsIcon],
        ].map(([label, Icon], index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className={classes.card} elevation={4}>
              <CardHeader
                avatar={
                  <Avatar className={classes.avatar}>
                    <Icon />
                  </Avatar>
                }
                title={label}
              />
              <CardContent>
                {/* You can add more detailed stats or interactive components here */}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
