import React from "react";
import "./index.css";
import Plus from "./img/plus.png";
import Minus from "./img/minus-sign.png";
import Bin from "./img/bin.png";
const CartItem = (props) => {
  const {title,price,qty,img} = props.product;
  const { product, onIncreaseQuantity , onDecreaseQuantity, onDeleteProduct} =   props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs. {price}</div>
        <div style={{ color: "#777" }}>Qty : {qty}</div>
        <div className="cart-item-actions">
          {/* Buttons to increase,decrease and delete the item */}
          <img
            alt="increase"
            className="action-icons"
            src={Plus}
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src={Minus}
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src={Bin}
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    backgroundColor: "#ccc",
  },
};
export default CartItem;
