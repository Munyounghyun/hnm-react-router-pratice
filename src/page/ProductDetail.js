import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useSelector } from "react-redux/es/exports";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.selectedItem);
  console.log(product);
  let { id } = useParams();
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="detail_product">
      <div className="clothes_img">
        <img src={product?.img} />
      </div>
      <div className="clothes_detail">
        <p>{product?.title}</p>
        <p>₩{product?.price}</p>
        <select>
          <option>{product?.size[0]}</option>
          <option>{product?.size[1]}</option>
          <option>{product?.size[2]}</option>
        </select>

        <button>추가</button>
      </div>
    </div>
  );
};

export default ProductDetail;
