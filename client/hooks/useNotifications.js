// hooks/useNotifications.js
import { useState, useEffect } from "react";
import { fetchNotifications } from "../utils/api"; // assuming you have this function in api.js

function useNotifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchNotifications()
      .then((data) => {
        setNotifications(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { notifications, loading, error };
}

export default useNotifications;
