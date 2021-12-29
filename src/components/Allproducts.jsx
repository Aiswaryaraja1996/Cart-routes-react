import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Allproducts() {
  const [products, setProducts] = useState([]);

  const getAllProducts = () => {
    const config = {
      url: `https://cart-mock-server.herokuapp.com/products`,
      method: "GET",
    };

    return axios(config);
  };

  useEffect(() => {
    getAllProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        backgroundImage:
          "url('https://www.elegantthemes.com/blog/wp-content/uploads/2020/06/000-Online-Brick-and-Mortar.png')",
        backgorundSize: "cover",
        height: "100vh",
      }}
    >
      <Navbar />
      <div>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              gap: "5rem",
              alignItems: "center",
              justifyContent: "space-between",
              width: "40%",
              margin: ".25rem auto",
              backgroundColor: "white",
              padding: ".25rem",
              borderRadius: ".25rem",
            }}
          >
            <div>
              <img src={item.img} alt={item.name} height="150" width="150" />
            </div>

            <div>
              <p>{item.name}</p>
              <p>Rs.{item.price}</p>
            </div>

            <div>
              <Link to={`/productdetails/${item.id}`}>
                <button>Show more details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allproducts;
