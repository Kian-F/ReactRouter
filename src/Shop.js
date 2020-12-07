import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    //maxWidth: 345,
  },
  media: {
    width: 400,
    height: 400,
  },
});

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
    <div className="products">
      <card>
        {products.map((product) => (
          <CardActionArea>
            <CardMedia className={classes.media} image={product.image} />
            <CardContent>
              <Typography
                key={product.id}
                gutterBottom
                variant="h5"
                component="h2"
              >
                <Link to={`/shop/${product.id}`}>{product.title}</Link>
              </Typography>
              <Typography>{product.category}</Typography>
            </CardContent>
          </CardActionArea>
        ))}
      </card>
    </div>
  );
}

export default Shop;
