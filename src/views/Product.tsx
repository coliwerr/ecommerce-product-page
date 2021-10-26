import React from "react";
import ItemDesription from "../components/item-description/ItemDescription";
import ItemPreview from "../components/item-preview/ItemPreview";

const Product = () => {
    return (
      <>
        <section id="item-preview" style={{ margin: "87px 0 0 45px" }}>
          <ItemPreview />
        </section>
        <section id="item-description" style={{margin:"140px 20px 0 90px"}}>
          <ItemDesription />
        </section>
      </>
    );
}

export default Product;