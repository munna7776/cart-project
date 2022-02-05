import React, { Component } from 'react';
import CartItem from './CartItem';
import './index.css';

const Cart = (props) => {
    // console.log(props.products);
    return (
        <div className="cart">
            {props.products.map((product)=>{
                return (
                    <CartItem 
                        key = {product.id}
                        product={product}
                        onIncreaseQuantity = {props.handleIncreaseQuantity}
                        onDecreaseQuantity = {props.handleDecreaseQuantity}
                        onDeleteProduct = {props.handleDeleteProduct}
                    />
                )
            })}
            
        </div>
    );
}

export default Cart;