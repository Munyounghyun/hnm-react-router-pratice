import React from "react";

const ProductCard = ({ item }) => {
  console.log(item);
  return (
    <div className="ProductCard">
      <img width="264px" height="396px" src={item?.img} />
      <div>{item?.choice === true ? "Concious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div>{item?.new === true ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
