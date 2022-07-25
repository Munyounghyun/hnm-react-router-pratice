import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async (size) => {
    let url = `http://localhost:3004/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
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
      <div>
        <p>{product?.title}</p>
        <p>₩{product?.price}</p>

        <select>
          {product?.size.map((sizes) => {
            console.log(sizes);
            <option key={sizes} value={sizes} sizes={sizes}>
              {sizes}
            </option>;
          })}
        </select>

        <button>추가</button>
      </div>
    </div>
  );
};

export default ProductDetail;
