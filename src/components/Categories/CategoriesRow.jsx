import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import Classes from "./CategoriesRow.module.css";
function CategoriesRow(props) {
  const productItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className={Classes.categories_row}>
      <p className={Classes.title}>Explore by categories</p>
      <div className={Classes.row}>
        {productItems.map((item) => (
          <ProductCard />
        ))}
      </div>
    </div>
  );
}

export default CategoriesRow;
