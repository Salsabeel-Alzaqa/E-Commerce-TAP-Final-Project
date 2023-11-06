import Client from "./axios";

export const fetchData = async (path, fetchedData) => {
  const response = await Client.get(path);
  const data = response.data;
  fetchedData(data);
};

export const updateData = async (path, updatedData) => {
  await Client.put(path, updatedData, {
    headers: { 'Content-Type': 'application/json' },
  });
};

export const deleteData = async (path) => {
  await Client.delete(path);
};

export const postData = async (path, dataToPost) => {
  const response = await Client.post(path, dataToPost, {
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};