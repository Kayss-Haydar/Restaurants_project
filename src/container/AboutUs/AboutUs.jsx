// eslint-disable-next-line no-unused-vars
import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about">

      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>

      <div className="app__aboutus-content flex__center">

        <div className="app__aboutus-contnet_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon img" className="spoon_img" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus eos adipisci odit maiores quod eum quisquam doloremque similique iste quos aliquam</p>
          <button type="button" className="custom__button">Know Menu</button>
        </div>

        <div className="app__aboutus-content-knife">
          <img src={images.knife} alt="knife" />
        </div>

        <div className="app__aboutus-content_ourhistory">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon img" className="spoon_img" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus eos adipisci odit maiores quod eum quisquam doloremque similique iste quos aliquam</p>
          <button type="button" className="custom__button">Know Menu</button>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
