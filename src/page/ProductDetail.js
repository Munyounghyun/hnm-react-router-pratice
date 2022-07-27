import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Munyounghyun/hnm-react-router-pratice
    /products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
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
        {/* 오류 */}
        <select>
          {/* {product?.size.map((sizes) => {
            console.log(sizes);
            <option key={sizes} value={sizes} sizes={sizes}>
              {sizes}
            </option>;
          })} */}
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
