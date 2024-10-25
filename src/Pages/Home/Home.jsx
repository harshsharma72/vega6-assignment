import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ImageCard from "../../Components/ImageCard/ImageCard";
import { useImageContext } from "../../store/ImageContext.jsx";
import SearchBar from "../../Components/SearchBar/SearchBar"; //

const API_URL = "https://api.unsplash.com/search/photos";
const imagePerPage = 20;

const Home = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { setImageUrl } = useImageContext();

  const getImage = async (pageNum, query) => {
    try {
      const result = await axios.get(
        `${API_URL}?query=${query}&page=${pageNum}&per_page=${imagePerPage}&client_id=-8NVHTXxQ76Nf4i0-HTMMe45j-q9PPY9qQc1HZpuMz0`
      );
      if (pageNum === 1) {
        setImages(result.data.results);
      } else {
        setImages((prevImages) => [...prevImages, ...result.data.results]);
      }
    } catch (err) {
      console.log("Error fetching images:", err);
    }
  };

  const loadMoreImages = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    getImage(nextPage, searchInput);
  };

  const handleAddCaption = (imageUrl) => {
    setImageUrl(imageUrl);
    navigate("/canvas");
  };

  const handleSearch = (searchTerm) => {
    setPage(1);
    getImage(1, searchTerm);
  };

  useEffect(() => {
    getImage(1, "nature");
  }, []);

  return (
    <div className={styles.mainContainer}>
      <SearchBar onSearch={handleSearch} />
      <div className={styles.imageGrid}>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            imageUrl={image.urls.small}
            altText={image.alt_description || "Unsplash Image"}
            onAddCaption={() => handleAddCaption(image.urls.small)}
          />
        ))}
      </div>
      <button className={styles.loadMoreButton} onClick={loadMoreImages}>
        Load More
      </button>
    </div>
  );
};

export default Home;
