import React, { Component } from 'react';
import CartItem from './CartItem';
import './index.css';

const Cart = (props) => {
    return (
        <div className="cart">
            {props.products.map((product)=>{
                return (
                    <CartItem 
                        key={product.id}
                        product={product}
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDeleteProduct = {props.onDeleteProduct}
                    />
                )
            })}
            
        </div>
    );
}

export default Cart;