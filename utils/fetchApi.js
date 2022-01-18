const axios = require("axios");

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "93318b8d4dmsh108d8f469971d54p1f040fjsnc7700b6cc894",
    },
  });

  return data;
};
