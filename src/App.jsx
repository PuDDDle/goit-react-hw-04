import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./Component/SearchBar/SearchBar";
import ImageGallery from "./Component/ImageGallery/ImageGallery";

const App = () => {
  const [hits, setHits] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query,
            per_page: 12,
          },
          headers: {
            Authorization:
              "Client-ID 3tEbJ6gy6PBIJgJlTqoK5DaGgsTzVT1rupGKZaOPW0k",
          },
        }
      );

      setHits(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="top-center" reverseOrder={false} />

      <ImageGallery images={hits} />
    </>
  );
};

export default App;
