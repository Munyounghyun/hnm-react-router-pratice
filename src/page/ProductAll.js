import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";
import { productAction } from "../redux/actions/productAction";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/hooks/useSelector";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList);
  //const productList = useSelector((state) => state.productList); 오류 => reducer에 저장되어있는 키값에 접근해야함

  const loading = useSelector((state) => state.product.loading);
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    //searchQuery를 미들웨어로 전달시키는방법 = 매개변수로 보내줌
    dispatch(productAction.getProducts(searchQuery));
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
