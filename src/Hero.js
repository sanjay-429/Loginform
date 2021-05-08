import React from "react";
import Data from "./Data";

const Hero = ({ handleLogout }) => {
  return (
    <section className="hero">
      <nav>
        <h2>Welcome</h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <Data />
    </section>
  );
};
export default Hero;
