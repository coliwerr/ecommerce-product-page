import React from "react";
import productImage1 from "../../assets/image-product-1.jpg";
import productThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import productImage2 from "../../assets/image-product-2.jpg";
import productThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import productImage3 from "../../assets/image-product-3.jpg";
import productThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import productImage4 from "../../assets/image-product-4.jpg";
import productThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

const ItemPreview = () => {
    return (
      <>
        <div>
          <img
            alt="Pair of sneakers"
            src={productImage1}
            style={{ borderRadius: 15, height: 445 }}
          />
          <img
            alt="Pair of sneakers with stones and twig"
            src={productImage2}
            style={{ borderRadius: 15, height: 445, display: "none" }}
          />
          <img
            alt="Single sneaker on stones"
            src={productImage3}
            style={{ borderRadius: 15, height: 445, display: "none" }}
          />
          <img
            alt="Sneaker balancing on edge of stone"
            src={productImage4}
            style={{ borderRadius: 15, height: 445, display: "none" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 445,
            marginTop: 25,
            border: "2px solid transparent",
          }}
        >
          <img
            alt="Pair of sneakers"
            src={productThumbnail1}
            style={{
              borderRadius: 15,
              height: 90,
              border: "2px solid transparent",
            }}
          />
          <img
            alt="Pair of sneakers with stones and twig"
            src={productThumbnail2}
            style={{
              borderRadius: 15,
              height: 90,
              border: "2px solid transparent",
            }}
          />
          <img
            alt="Single sneaker on stones"
            src={productThumbnail3}
            style={{
              borderRadius: 15,
              height: 90,
              border: "2px solid transparent",
            }}
          />
          <img
            alt="Sneaker balancing on edge of stone"
            src={productThumbnail4}
            style={{
              borderRadius: 15,
              height: 90,
              border: "2px solid transparent",
            }}
          />
        </div>
      </>
    );
}

export default ItemPreview;