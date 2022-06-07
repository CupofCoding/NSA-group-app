// <<<<<<< HEAD
import React from 'react';

export default function Product(props) {
    const { product, addToCart, addToWishList } = props;

  return (
    <div className='product-div'>
      <div>
        <a href='/ProductPage'>
            <img className="small" src={product.image}></img>
        </a>
        <h3>{product.name}</h3>
        <div>{product.size}</div>
        <div><strong>$</strong>{product.price}</div>
        <div className='div-btn'>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={() => addToWishList(product)} >Add to Wish-List</button>
        </div>
      </div>
    </div>
  );
}
// // =======
// import React from 'react'

// export default function Product(props) {
//     const {product, onAdd, onRemove} = props;
//   return (
//     <div>
//         <img className='small' src={product.image} alt= {product.name}></img>
//         <h3> {product.name} </h3>
//         <div>${product.price}</div>
//         <div>
//             <button onClick={()=>onAdd(product)}>+</button>
//             {/* item count goes here */}
//             <button onClick={()=>onSubtract(product)}>-</button>

//             <button onClick={()=>onRemove(product)}>Remove</button>
//             </div>
//     </div>
//   )
// }


// function Summary(props) {

//   const {cartItems, onAdd, onRemove} = props;
//   return(
//     <div> 
//       {cartItems.map((item) =>(
//     //           <div key={ item.id } className='row'>
//     //          <div className='col-2'>{item.name}</div>
//     //         <div className='col-2'>
//             <button onClick={()=>onRemove(item)} className='remove'>-</button>
//             <button onClick={()=>onAdd(item)} className='add'>+</button>
//     //         </div>
//     //          <div className='col-2 text-right'>
//     //              {item.qty}x ${item.price.toFixed(2)}
//     //              </div>          
//     //         </div>
//     )
//     )
//   }
//     </div>
//     }
// >>>>>>> origin/big-bang
