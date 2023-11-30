import axios from "axios";

const URL: string = "http://localhost:8899/api/v2";

export const createUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/create-user`, data);
  } catch (error) {
    return error;
  }
};

export const signInUser = async (data: any) => {
  try {
    return await axios.post(`${URL}/sign-in-user`, data).then((res: any) => {
      return res.data;
    });
  } catch (error) {
    return error;
  }
};

export const getUser = async (userID: string) => {
  try {
    return await axios.get(`${URL}/${userID}/get-one-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};

export const getAllUser = async () => {
  try {
    return await axios.get(`${URL}/get-user`).then((res: any) => {
      return res.data.data;
    });
  } catch (error) {
    return error;
  }
};
