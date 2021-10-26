import React, { useState } from "react";
import shoppingCart from "../../assets/icon-cart-white.svg";
import plus from "../../assets/icon-plus.svg";
import minus from "../../assets/icon-minus.svg";

const ItemDesription = () => {
  const [quantity, setQuantity] = useState(0);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <header className="description-header">
        <div>Sneaker Company</div>
        <div>Fall Limited Edition Sneakers</div>
      </header>
      <div className="description-body">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </div>
      <div>
        <div className="discount-price">
          $125.00 <div>50%</div>
        </div>
        <div className="regular-price">$250.00</div>
      </div>
      <div className="add-items">
        <div className="add-items-counter">
          <img
            alt="Minus"
            height="4px"
            src={minus}
            onClick={decrementQuantity}
          />
          <span style={{ fontWeight: "bold" }}>{quantity}</span>
          <img
            alt="Plus"
            height="12px"
            src={plus}
            onClick={incrementQuantity}
          />
        </div>
        <button>
          <img alt="Shopping cart icon" src={shoppingCart} />
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default ItemDesription;
