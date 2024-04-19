// eslint-disable-next-line no-unused-vars
import React from "react";
import { images } from "../../constants";

// eslint-disable-next-line react/prop-types
const SubHeading = ({ title }) => {
  return (
    <div style={{ margin: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={images.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
