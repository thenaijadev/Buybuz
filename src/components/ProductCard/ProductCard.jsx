import React from "react";
import Classes from "./ProductCard.module.css";
function ProductCard(props) {
  return (
    <div className={Classes.product_card}>
      <div>
        <img className={Classes.product_img} src="Assets/Images/product.jpg" />
        <div className={Classes.details}>
          <p className={Classes.name}>Furniture</p>
          <p className={Classes.shop}>Doyle</p>
          <p className={Classes.price}>$200</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
