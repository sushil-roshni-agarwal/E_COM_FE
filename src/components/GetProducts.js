import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const GetProducts = ({cart,setCart}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8080/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  // Function to add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Function to remove one instance of a product from the cart
  const removeFromCart = (productId) => {
    const productIndex = cart.findIndex((product) => product.productId === productId);
    if (productIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(productIndex, 1);
      setCart(updatedCart);
    }
  };

  // Function to calculate the count of a specific product in the cart
  const getProductCountInCart = (productId) => {
    return cart.filter((product) => product.productId === productId).length;
  };

  return (
    <div className="container">
      <div className="cart-button">
        <Link to="/cart" className="btn btn-primary">
          <button className="btn btn-primary">
            Cart 
          </button>
        </Link>
      </div>
      <h1 className="my-4 text-center">Products</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row" style={{backgroundColor:"lightAshBackground"}}>
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.productId}>
              <div className="card bg-secondary text-white">
                <img src="product-image.jpg" alt={product.productType} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">₹ {product.productPrice}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="btn btn-success" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                    {cart.find((item) => item.productId === product.productId) && (
                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => removeFromCart(product.productId)}
                        >
                          Delete Item
                        </button>
                        <span className="mx-2">
                          Count: {getProductCountInCart(product.productId)}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default GetProducts;
