// hooks/useTasks.js
import { useState, useEffect } from "react";
import { fetchTasks } from "../utils/api"; // assuming you have this function in api.js

function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { tasks, loading, error };
}

export default useTasks;
