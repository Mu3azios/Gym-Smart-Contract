import "./style.css";
import React from "react";
import image2 from "../../images/2.jpg";
const Hero = () => {
  return (
    <div>
      <div className="container">
        <img src={image2} className="background" />
        <p className="text">
          <h1>About US</h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <form action="submit" className="form">
          <label>Your Full Name</label>
          <br></br>
          <input type="text" />
          <br></br>

          <label>Amount</label>
          <br></br>

          <input type="number" />
          <br></br>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
