import React from "react";
import products from "../assets/fake-data/products";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commom-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import productImg from "../assets/images/product_01.1.jpg";
import "../Styles/product-details.css";
import { useState } from "react";
import { useEffect } from "react";

const FoodDetails = () => {
  const [tab, setTab] = useState("desc");
  const { id } = useParams();

  const product = products.find((product) => product.id === id);
  const [previewImg, setPreviewImg] = useState(product.image01);
  const { title, price, category, desc } = product;

  return (
    <>
      <Helmet title="Product-details">
        <CommonSection title={title} />
        <section>
          <Container>
            <Row>
              <Col lg="2" md="2">
                <div className="product__images">
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image01)}
                  >
                    <img src={product.image01} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item mb-3"
                    onClick={() => setPreviewImg(product.image02)}
                  >
                    <img src={product.image02} alt="" className="w-50" />
                  </div>
                  <div
                    className="img__item"
                    onClick={() => setPreviewImg(product.image03)}
                  >
                    <img src={product.image03} alt="" className="w-50" />
                  </div>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="product__main-img">
                  <img src={previewImg} alt="" className="w-100" />
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="single__product-content">
                  <h2 className="products__title mb-3">{title}</h2>
                  <p className="products__price">
                    Price:<span>${price}</span>{" "}
                  </p>
                  <p className="category mb-5">
                    Category: <span>{category}</span>
                  </p>

                  <button className="btn addTOCart__btn">Add to Cart</button>
                </div>
              </Col>
              <Col lg="12">
                <div className="tabs d-flex alingn-items-center gap-5 py-3">
                  <h6
                    className={`${tab === "desc" ? "tab__active" : ""}`}
                    onClick={() => setTab("desc")}
                  >
                    Description
                  </h6>
                  <h6
                    className={`${tab === "rev" ? "tab__active" : ""}`}
                    onClick={() => setTab("rev")}
                  >
                    Review
                  </h6>
                </div>
                {tab === "desc" ? (
                  <div className="tab__content">
                    {" "}
                    <p>{desc}</p>
                  </div>
                ) : (
                  <div className="tab__form mb-3">
                    <div className="review pt-5">
                      <p className="user__name mb-0">Jhon Doe</p>
                      <p className="user__email">Jhon@email.com</p>
                      <p className="feedback__text">great product </p>
                    </div>
                    <div className="review">
                      <p className="user__name mb-0">Jhon Doe</p>
                      <p className="user__email">Jhon@email.com</p>
                      <p className="feedback__text">great product </p>
                    </div>
                    <div className="review">
                      <p className="user__name mb-0">Jhon Doe</p>
                      <p className="user__email">Jhon@email.com</p>
                      <p className="feedback__text">great product </p>
                    </div>
                    <form className="form">
                      <div className="form__group">
                        <input type="text" placeholder="Enter your name" />
                      </div>

                      <div className="form__group">
                        <input type="text" placeholder="Enter your name" />
                      </div>

                      <div className="form__group">
                        <textarea
                          rows={5}
                          type="text"
                          placeholder="Enter your name"
                        />
                      </div>
                    </form>
                  </div>
                )}
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default FoodDetails;
