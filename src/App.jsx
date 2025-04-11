import { useState } from "react";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import SearchBar from "./Component/SearchBar/SearchBar";
import ImageGallery from "./Component/ImageGallery/ImageGallery";
import LoadMoreBtn from "./Component/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./Component/ErrorMessage/ErrorMessage";
import Loader from "./Component/Loader/Loader";

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(null);

  const fetchImages = async (searchQuery, pageNumber, orientation) => {
    try {
      setError(null);
      setIsLoading(true);

      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: searchQuery,
            page: pageNumber,
            per_page: 12,
            orientation: orientation,
          },
          headers: {
            Authorization:
              "Client-ID 3tEbJ6gy6PBIJgJlTqoK5DaGgsTzVT1rupGKZaOPW0k",
          },
        }
      );

      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching images:", error);
      setError("Не вдалося завантажити зображення.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setTotalPages(null);
    fetchImages(newQuery, 1);
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchImages(query, nextPage);
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      <Toaster position="center" reverseOrder={false} />

      {error ? (
        <ErrorMessage message={error} />
      ) : (
        <>
          <ImageGallery images={images} />
          {isLoading && <Loader />}
          {images.length > 0 && !isLoading && page < totalPages && (
            <LoadMoreBtn onClick={handleLoadMore} />
          )}
        </>
      )}
    </>
  );
};

export default App;
