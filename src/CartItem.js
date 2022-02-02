import React, { Component } from 'react';
import './index.css';
import Plus from './img/plus.png';
import Minus from './img/minus-sign.png';
import Bin from './img/bin.png';
class CartItem extends Component {
    constructor(){
        super();
        this.state={
            title:'Xiomi',
            price:15999,
            qty : 1,
            img : '',
        }
    }


    increaseQuantity = ()=>{
        this.setState((prevState)=>{
            return {
                qty : prevState.qty +1
            }
        })
    }

    decreaseQuantity = ()=>{
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        this.setState((prevState)=>{
            return {
                qty : prevState.qty - 1
            }
        })
    }
    
  render() {
    const {title,price,qty} = this.state;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img  style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color:'#777' }}>Rs. {price}</div>
                <div style={{ color:'#777' }}>Qty : {qty}</div>
                <div className="cart-item-actions">
                    {/* Buttons to increase,decrease and delete the item */}
                    <img 
                        alt="increase" 
                        className="action-icons" 
                        src={Plus} 
                        onClick={this.increaseQuantity}
                    />
                    <img 
                        alt="decrease" 
                        className="action-icons" 
                        src={Minus}
                        onClick = {this.decreaseQuantity}
                        disabled = {true}
                    />
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src={Bin} 
                    />
                </div>
            </div>
        </div>
    );
  }
}

const styles = {
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'#ccc'
    }
}
export default CartItem;
