import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은? ", searchQuery);
    let url = `https://my-json-server.typicode.com/Munyounghyun/hnm-react-router-pratice
    /products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    //배열에 값이 없으면 프고젝트 시작 후 딱 한번만 실행됨
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productList.length != 0 ? (
            productList.map((menu) => (
              <Col lg={3}>
                <ProductCard item={menu} />
              </Col>
            ))
          ) : (
            <div className="non_product">
              <h3 className="non_product_item">해당하는 상품이 없습니다...</h3>
              <span className="non_product_item">다시 검색해주세요</span>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
