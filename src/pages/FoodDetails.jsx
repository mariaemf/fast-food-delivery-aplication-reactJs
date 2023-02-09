import React from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/common-section/commonSection";
import { Container, Row, Col } from "reactstrap";
import productImg from "../assets/images/product_01.1.jpg";

const FoodDetails = () => {
  return (
    <>
      <Helmet title="Product-details">
        <CommonSection title="product 01" />
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="product__images"></div>
              </Col>
              <Col lg="6" md="6"></Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default FoodDetails;
