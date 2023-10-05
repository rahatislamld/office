// Header.js
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useScrollTrigger,
} from "@material-ui/core";

function useElevationScroll() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return { elevation: trigger ? 4 : 0 };
}

function Header() {
  const { elevation } = useElevationScroll();

  return (
    <AppBar position="fixed" elevation={elevation}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Web App
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
