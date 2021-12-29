import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "white",
        gap: "0.5rem",
        fontSize: "18px",
        alignItems: "center",
      }}
    >
      <div style={{marginLeft:"1rem"}}>
        <img src="../../shoppingcart.png" alt="cart" height="30"/>
      </div>
      <div style={{ display: "flex", gap: "1rem", margin: "0 0.5rem" }}>
        <Link to="/" exact style={{ textDecoration: "none" }}>
          HOME
        </Link>
        <Link to="/allproducts" exact style={{ textDecoration: "none" }}>
          ALL PRODUCTS
        </Link>
        <Link to="/aboutus" exact style={{ textDecoration: "none" }}>
          ABOUT US
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
