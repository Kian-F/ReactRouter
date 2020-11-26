import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <div className="products">
        {products.map((product) => (
          <ul >
            <h3 key={product.id}>
              <Link to={`/shop/${product.id}`}>{product.title}</Link>
            </h3>
            <h4>{product.category}</h4>
            <img src={product.image}></img>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Shop;
