import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root:{
    maxWidth: 345,
  },
  media:{
    height: 140,
  },
})

function Shop() {
  const classes = useStyles();
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
            <li><h3 key={product.id}>
              <Link to={`/shop/${product.id}`}>{product.title}</Link>
            </h3></li>
            <h4>{product.category}</h4>
            <img src={product.image}></img>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Shop;
