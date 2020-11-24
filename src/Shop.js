import { useState, useEffect } from "react";
import Route from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const products = await data.json();
    console.log(products);
    setProducts(products);
  };
  return (
    <div>
      <h3>Shop</h3>
      {products.map((product) => (
        <ul>
          <h3 key={product.id}>{product.title}</h3>
      <h4>{product.category}</h4>
          <img src={product.image}></img>
          <li>{}</li>
        </ul>
      ))}
    </div>
  );
}

export default Shop;
