// frontend/pages/user/tasks.js
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Checkbox,
} from "@mui/material";
import { useState } from "react";

function UserTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Sample Task", completed: false },
    // ... Add more sample tasks here
  ]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Your Tasks
      </Typography>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task.id}
            dense
            button
            onClick={() => {
              const newTasks = [...tasks];
              const targetTask = newTasks.find((t) => t.id === task.id);
              targetTask.completed = !targetTask.completed;
              setTasks(newTasks);
            }}
          >
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={task.title} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserTasks;
