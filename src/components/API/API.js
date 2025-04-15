import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const fetchImages = async (query, page = 1) => {
  const res = await axios.get("/search/photos", {
    params: {
      query,
      page,
      per_page: 9,
      orientation: "landscape",
    },
    headers: {
      Authorization: "Client-ID 3tEbJ6gy6PBIJgJlTqoK5DaGgsTzVT1rupGKZaOPW0k",
    },
  });

  return res.data;
};

export { fetchImages };
