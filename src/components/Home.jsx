import React from "react";
import Navbar from "./Navbar";

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
          fontSize: "56px",
          fontFamily: "'Dancing Script', cursive",
          letterSpacing: "2px",
          marginTop: "12px",
        }}
      >
        <p>Shop all your favourites</p>
      </div>
    </div>
  );
}

export default Home;
