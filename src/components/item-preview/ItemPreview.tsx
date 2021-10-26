import React, { useState } from "react";
import productImage1 from "../../assets/image-product-1.jpg";
import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productImage4 from "../../assets/image-product-4.jpg";
import productThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

const ItemPreview = () => {
  const [activePreview, setActivePreview] = useState(1);

  const onGalleryClick = (event : React.MouseEvent<HTMLElement>) => {
    setActivePreview(Number(event.currentTarget.dataset.index));
  }

  return (
    <>
      <div className="preview-large">
        <img
          className={activePreview === 1 ? "active" : ""}
          alt="Pair of sneakers"
          src={productImage1}
        />
        <img
          className={activePreview === 2 ? "active" : ""}
          alt="Pair of sneakers with stones and twig"
          src={productImage2}
        />
        <img
          className={activePreview === 3 ? "active" : ""}
          alt="Single sneaker on stones"
          src={productImage3}
        />
        <img
          className={activePreview === 4 ? "active" : ""}
          alt="Sneaker balancing on edge of stone"
          src={productImage4}
        />
      </div>
      <div className="preview-gallery">
        <div data-index="1" onClick={onGalleryClick} className={activePreview === 1 ? "active" : ""}>
          <img alt="Pair of sneakers" src={productThumbnail1} />
        </div>
        <div data-index="2" onClick={onGalleryClick} className={activePreview === 2 ? "active" : ""}>
          <img
            alt="Pair of sneakers with stones and twig"
            src={productThumbnail2}
          />
        </div>
        <div data-index="3" onClick={onGalleryClick} className={activePreview === 3 ? "active" : ""}>
          <img alt="Single sneaker on stones" src={productThumbnail3} />
        </div>
        <div data-index="4" onClick={onGalleryClick} className={activePreview === 4 ? "active" : ""}>
          <img
            alt="Sneaker balancing on edge of stone"
            src={productThumbnail4}
          />
        </div>
      </div>
    </>
  );
};

export default ItemPreview;
