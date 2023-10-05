// TaskList.js
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Paper,
  Card,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function TaskList({ tasks }) {
  return (
    <List>
      {tasks.map((task) => (
        <Card key={task.id} style={{ marginBottom: "15px" }}>
          <CardContent>
            <ListItem>
              <Checkbox
                checked={task.completed}
                inputProps={{ "aria-labelledby": task.id }}
              />
              <ListItemText id={task.id} primary={task.title} />
            </ListItem>
          </CardContent>
          <CardActions>
            <IconButton aria-label="edit" color="primary">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" color="secondary">
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </List>
  );
}

export default TaskList;
