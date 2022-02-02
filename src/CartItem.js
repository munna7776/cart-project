import React, { Component } from 'react';
import './index.css';
class CartItem extends Component {
  render() {
    return (
        <div className="cart-item">
            <div className="left-block">
                <img  style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize:'2rem' }}>Item</div>
                <div style={{ color:'#777' }}>Price</div>
                <div style={{ color:'#777' }}>Quantity : 1</div>
                <div className=".cart-item-actions">
                    {/* Buttons to increase,decrease and delete the item */}
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
