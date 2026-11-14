const API_URL = "http://localhost:3000";

const endpoint = API_URL + "/login";

const postLogin = async (data: { email: string; password: string }) => {
  return fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export { postLogin };
