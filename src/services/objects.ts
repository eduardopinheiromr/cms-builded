import api from "./api";

export const getAllObjects = async () => {
  const { data } = await api.get("/core/objects");

  return data;
};

export const createObject = async () => {
  const { data } = await api.post("/core/object");

  return data;
};
