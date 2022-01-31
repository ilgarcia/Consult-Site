import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const createSession = async (login, password) => {
  return (api.post("/session", { login, password })
  .then(response => { 
    return response
  })
  .catch(err => {
    return err.response
    // return err.response.data
  })
  );
};

export const getUsers = async () => {
  const token = localStorage.getItem("token");
  return api.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const showUser = async (id) => {
  const token = localStorage.getItem("token");

  return api.get(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = async (login, password, level) => {
  const token = localStorage.getItem("token");
  return api.post(
    "/users",
    { login, password, level },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const editUser = async (id, login, password, level) => {
  const token = localStorage.getItem("token");
  return api.put(
    `/users/${id}`,
    { login, password, level },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const deleteUser = async (id) => {
  const token = localStorage.getItem("token");

  return api.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
