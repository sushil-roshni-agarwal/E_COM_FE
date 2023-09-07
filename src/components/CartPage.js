import React from 'react';

const CartPage = ({ cart }) => {
  const productCounts = new Map();

  const uniqueCartItems = cart.filter((cartItem) => {
    if (productCounts.has(cartItem.productId)) {
      productCounts.set(cartItem.productId, productCounts.get(cartItem.productId) + 1);
      return false; 
    } else {
      productCounts.set(cartItem.productId, 1);
      return true; 
    }
  });

  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-header">
          <h3>Cart</h3>
        </div>
        <div className="row">
          {uniqueCartItems.map((cartItem) => (
            <div className="col-md-4 mb-4" key={cartItem.productId}>
              <div className="card bg-secondary text-white">
                <img src="product-image.jpg" alt={cartItem.productType} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{cartItem.productName}</h5>
                  <p className="card-text">₹ {cartItem.productPrice}</p>
                  <p className="card-text">Count: {productCounts.get(cartItem.productId)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
