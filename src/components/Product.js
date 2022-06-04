import React from 'react'

export default function Product(props) {
    const {product, onAdd, onRemove} = props;
  return (
    <div>
        <img className='small' src={product.image} alt= {product.name}></img>
        <h3> {product.name} </h3>
        <div>${product.price}</div>
        <div>
            <button onClick={()=>onAdd(product)}>+</button>
            <button onClick={()=>onRemove(product)}>Remove</button>
            </div>
    </div>
  )
}


function Summary(props) {
  const {cartItems, onAdd, onRemove} = props;
  return(
    {cartItems.map((item) =>(
              <div key={ item.id } className='row'>
             <div className='col-2'>{item.name}</div>
            <div className='col-2'>
            <button onClick={()=>onRemove(item)} className='remove'>-</button>
            <button onClick={()=>onAdd(item)} className='add'>+</button>
            </div>
             <div className='col-2 text-right'>
                 {item.qty}x ${item.price.toFixed(2)}
                 </div>          
            </div>
               ))}
    }