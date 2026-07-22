import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  return (
    <>
      {props.productList.length > 0 ? (
        props.productList.map((product, i) => (
          <div key={i}>
            <Product
              product={product}
              index={i}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              removeItem={props.removeItem}
            />
          </div>
        ))
      ) : (
       <h2 style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }}>
  No products exist in the cart
</h2>
      )}
    </>
  );
}