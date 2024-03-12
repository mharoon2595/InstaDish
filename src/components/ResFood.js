import React from "react";

const ResFood = ({ menu }) => {
  const { name, category, price } = menu;

  return (
    <div className="menu-container">
      <div>{name}</div>
      <div>Price: Rs.{price / 100}</div>
      <div>{category}</div>
    </div>
  );
};

export default ResFood;
