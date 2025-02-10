import axios from "axios";

export const fetchData = async function (query, page) {
  const API_KEY = "48652529-5a2ec41353d9f9d1b8d0a5e86";
  const API = `https://pixabay.com/api/?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=8&lang=en+ru&page=${page}`;

  const { data } = await axios.get(API);

  return data;
};
