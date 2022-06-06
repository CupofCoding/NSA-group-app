import React from 'react';

export default function Product(props) {
    const { product, addToCart } = props;

  return (
    <div>
      <img className="small" src={product.image}></img>
      <h3>{product.name}</h3>
      <div><strong>$</strong>{product.price}</div>
      <div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
          <button>Add to Wish-List</button>
      </div>
    </div>
  );
}
