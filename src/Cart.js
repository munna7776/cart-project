import React, { Component } from 'react';
import CartItem from './CartItem';
import './index.css';

class Cart extends Component {
    constructor(){
        super();
        this.state={
            products:[
                {
                    id:1,
                    title:'Xiomi',
                    price:15999,
                    qty : 1,
                    img : '',
                },
                {
                    id:2,
                    title:'Oppo A54',
                    price:16999,
                    qty : 1,
                    img : '',
                },
                {
                    id:3,
                    title:'Redmi 9 pro',
                    price:9999,
                    qty : 1,
                    img : '',
                },
                {
                    id:4,
                    title:'iPhone 16s',
                    price:155999,
                    qty : 1,
                    img : '',
                },
            ]
        }
    }

    handleIncreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
            products:products
        })
    }
    handleDecreaseQuantity = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        if(products[index].qty === 0){
            return;
        }
        products[index].qty -= 1;
        this.setState({
            products:products
        })
    }

    handleDeleteproduct = (id)=>{
        const {products} = this.state;
        const items = products.filter(item => item.id !== id)
        this.setState({
            products:items
        })
    }
  render() {
      const {products} = this.state;
    return (
        <div className="cart">
            {products.map((product)=>{
                return (
                        <CartItem 
                            key={product.id}
                            product={product}
                            onIncreaseQuantity = {this.handleIncreaseQuantity}
                            onDecreaseQuantity = {this.handleDecreaseQuantity}
                            onDeleteProduct = {this.handleDeleteproduct}
                        />
                )
            })}
            
        </div>
    );
  }
}

export default Cart;