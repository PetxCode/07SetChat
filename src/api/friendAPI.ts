import axios from "axios";
const URL: string = "http://localhost:8899/api/v2";

// http://localhost:8899/api/v2/655092f13b6b354be9c212dc/65689a2d0a4e7f356fe3c25f/un-friend

export const addFriend = async (userID: string, friendID: string) => {
  try {
    return await axios
      .post(`${URL}/${userID}/${friendID}/be-friend`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};

export const unFriend = async (userID: string, friendID: string) => {
  try {
    return await axios
      .post(`${URL}/${userID}/${friendID}/un-friend`)
      .then((res: any) => {
        return res.data;
      });
  } catch (error) {
    return error;
  }
};
