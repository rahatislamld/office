// utils/api.js

const BASE_URL = "https://your-api-endpoint.com";

export async function fetchWithTimeout(resource, options = {}) {
  const { timeout = 8000 } = options;
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);

  const response = await fetch(resource, {
    ...options,
    signal: controller.signal,
  });
  clearTimeout(id);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
}

export const fetchTasks = () => fetchWithTimeout(`${BASE_URL}/tasks`);
export const fetchNotifications = () =>
  fetchWithTimeout(`${BASE_URL}/notifications`);
export const fetchMessages = () => fetchWithTimeout(`${BASE_URL}/messages`);
