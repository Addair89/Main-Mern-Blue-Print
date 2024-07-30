import { getToken } from "./users-service";
export default async function sendRequest(url, method = "GET", payload = null) {
  const options = { method };
  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }

  const token = getToken();
  if (token) {
    options.headers = options.headers || {};
    options.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const res = await fetch(url, options);
    if (res.ok) {
      return res.json();
    } else {
      const errorData = await res.json(); // Parse error response
      throw new Error(`${res.status} - ${errorData.message}`);
    }
  } catch (error) {
    throw new Error(`Network Error: ${error.message}`);
  }
}
