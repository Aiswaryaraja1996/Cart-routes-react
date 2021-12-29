import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
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

      <div
        style={{
          textAlign: "center",
          color: "white",

          letterSpacing: "2px",
          marginTop: "12px",
        }}
      >
        <p
          style={{
            fontSize: "56px",
            fontFamily: "'Dancing Script', cursive",
            
          }}
        >
          Shop all your favourites
        </p>
        <div
          style={{
            backgroundColor: "white",
            color: "black",
            width: "30%",
            margin: "auto",
            borderRadius: "1rem",
            padding: "1rem",
          }}
        >
          <p>Get 20% Discount on all products</p>
          <p>Use the code below</p>
          <p style={{ color: "Green", fontWeight: "bold" }}>FAV20</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
