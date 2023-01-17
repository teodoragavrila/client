import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ShowProducts.module.css";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsData = async () => {
      const { data } = await axios.get(
        "http://localhost:8080/api/products/allProducts"
      );
      console.log(data);
      setProducts(data);
    };
    getProductsData();
  }, []);
  return (
    <>
      <Container>
        <h1 className={styles.show}>Show All Products</h1>
        <hr />

        <Row>
          {products.map((product) => {
            return <Col md={8} lg={12} sm={12} key={product.id}>
                <ProductCard product={product}/>
            </Col>
          })}
        </Row>
      </Container>
    </>
  );
};

export default ShowProducts;
