import React from "react";
import ItemPreview from "../components/item-preview/ItemPreview";

const Product = () => {
    return (
      <>
        <section id="item-preview" style={{margin:"87px 0 87px 45px"}}>
            <ItemPreview/>
        </section>
        <section id="item-description"></section>
      </>
    );
}

export default Product;