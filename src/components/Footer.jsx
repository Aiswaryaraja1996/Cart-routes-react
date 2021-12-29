import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div style={{ backgroundColor: "white", marginTop:"350px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <img src="../../meta.png" alt="Meta" height="30" />
        <img src="../../twit.png" alt="Meta" height="40" />
        <img src="../../insta.png" alt="Meta" height="30" />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Link to="/faq" exact style={{ textDecoration: "none" }}>
          FAQ
        </Link>

        <Link to="/career" exact style={{ textDecoration: "none" }}>
          CAREERS
        </Link>
        <Link to="/contactus" exact style={{ textDecoration: "none" }}>
          CONTACT US
        </Link>
      </div>
    </div>
  );
}

export default Footer;
