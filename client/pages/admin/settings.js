import {
  Container,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  button: {
    marginTop: theme.spacing(4),
  },
}));

export default function Settings() {
  const classes = useStyles();
  const [theme, setTheme] = React.useState("light");

  const handleChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Admin Settings
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="theme-select-label">Theme</InputLabel>
        <Select
          labelId="theme-select-label"
          value={theme}
          onChange={handleChange}
          label="Theme"
        >
          <MenuItem value="light">Light</MenuItem>
          <MenuItem value="dark">Dark</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
      >
        Save Settings
      </Button>
    </Container>
  );
}
