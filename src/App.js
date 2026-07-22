import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import AddItem from "./components/Additem";

function App() {
  // Start with an empty product list
  const [productList, setProductList] = useState([]);

  const [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    const newProducts = [...productList];
    let newTotalAmount = totalAmount;

    newProducts[index].quantity++;
    newTotalAmount += newProducts[index].price;

    setTotalAmount(newTotalAmount);
    setProductList(newProducts);
  };

  const decrementQuantity = (index) => {
    const newProducts = [...productList];
    let newTotalAmount = totalAmount;

    if (newProducts[index].quantity > 0) {
      newProducts[index].quantity--;
      newTotalAmount -= newProducts[index].price;
    }

    setProductList(newProducts);
    setTotalAmount(newTotalAmount);
  };

  const resetQuantity = () => {
    const newProducts = productList.map((product) => ({
      ...product,
      quantity: 0,
    }));
    setProductList(newProducts);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    newProductList.splice(index, 1);
    setProductList(newProductList);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];

    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });

    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />

      <main className="container mt-5">
        <AddItem AddItem={addItem} />

        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>

      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;