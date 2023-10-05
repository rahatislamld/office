import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(4),
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
    transition: "background-color 0.2s ease-in-out",
  },
}));

export default function Users() {
  const classes = useStyles();
  const users = ["John Doe", "Jane Smith", "Emily Johnson"];

  return (
    <Container className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Manage Users
      </Typography>
      <List>
        {users.map((user) => (
          <ListItem key={user} button className={classes.listItem}>
            <ListItemText primary={user} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
