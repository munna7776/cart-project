import React from "react";

const Navbar = (props) => {
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://cdn-icons.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1643802333~hmac=3900efb845ceeea2f032c8674f4554d9"
          alt="cart-icon"
        />
        <span style={styles.cartCount}>{props.count}</span>
      </div>
    </div>
  );
};
const styles = {
  cartIcon: {
    height: 32,
    marginRight: 20,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
    marginRight: "10px",
  },
  cartCount: {
    background: "yellow",
    borderRadius: "50%",
    padding: "4px 8px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};

export default Navbar;
