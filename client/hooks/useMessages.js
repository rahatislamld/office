// hooks/useMessages.js
import { useState, useEffect } from "react";
import { fetchMessages } from "../utils/api"; // assuming you have this function in api.js

function useMessages() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchMessages()
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { messages, loading, error };
}

export default useMessages;
