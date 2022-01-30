import axios from "axios";

export const getColors = async () => {
  return await axios.get("https://color-names.herokuapp.com/v1/");
};
