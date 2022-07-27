import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";

const ProductAll = () => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/Munyounghyun/hnm-react-router-pratice
    /products?q=${searchQuery}`;
    setLoading(true); //스피너 보임
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    setLoading(false); //값들고오면 스피너 사라짐
  };

  useEffect(() => {
    //배열에 값이 없으면 프고젝트 시작 후 딱 한번만 실행됨
    getProducts();
  }, [query]);
  return (
    <div>
      <Container className={loading ? "loading_spanner" : "non_spanner"}>
        {loading ? (
          <ClipLoader
            color="#f88c6b"
            loading={loading} //loading이라는 props를 통해 보이고 안보이고 조절가능
            //cssOverride={override}
            size={150}
          />
        ) : (
          <Row>
            {productList?.length != 0 ? (
              productList?.map((menu) => (
                <Col lg={3}>
                  <ProductCard item={menu} />
                </Col>
              ))
            ) : (
              <div className="non_product">
                <h3 className="non_product_item">
                  해당하는 상품이 없습니다...
                </h3>
                <span className="non_product_item">다시 검색해주세요</span>
              </div>
            )}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductAll;
