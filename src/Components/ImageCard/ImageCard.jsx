import React from "react";
import { useImageContext } from "../../store/ImageContext.jsx";
import { useNavigate } from "react-router-dom";
import styles from "./ImageCard.module.css";

const ImageCard = ({ imageUrl, altText }) => {
  const { setImageUrl } = useImageContext();
  const navigate = useNavigate();

  const handleAddCaption = () => {
    setImageUrl(imageUrl);
    navigate("/canvas");
  };

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={altText} className={styles.image} />
      <button className={styles.captionButton} onClick={handleAddCaption}>
        Add Caption
      </button>
    </div>
  );
};

export default ImageCard;
