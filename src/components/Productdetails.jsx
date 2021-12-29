import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";

const getUsersbyId = (id) => {
  const config = {
    url: `https://cart-mock-server.herokuapp.com/products/${id}`,
    method: "GET",
  };

  return axios(config);
};

function Productdetails() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsersbyId(id).then((res) => {
      setData(res.data);
      setLoading(false);
    });
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

      {isLoading ? (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.5rem",
            width: "20%",
            margin: "3rem auto",
          }}>Loading....</div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.5rem",
            width: "20%",
            margin: "3rem auto",
          }}
        >
          {data.length === 0 ? (
            <div>Something Went Wrong!!</div>
          ) : (
            <div>
              <h2>{data.name}</h2>
              <img src={data.img} alt={data.name} height="250" />
              <p>Rs.{data.price}</p>
              <button>ADD TO CART</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Productdetails;
