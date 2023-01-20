import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import heroImg from "../../src/assets/images/hero.png";
import Helmet from "../components/Helmet/Helmet.js";
import "../Styles/hero-section.css";

const Home = () => {
  return (
    <>
      <Helmet Title="Home">
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6">
                <div className="hero__content">
                  <h5 className="mb-3">Easy way to make an order</h5>
                  <h1 className="mb-4 hero__title">
                    <span>HUNGRY?</span>
                    Just wait <br />
                    food at<span> your door</span>
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eligendi molestias alias a eius odit minus.
                  </p>

                  <div className="hero__btns d-flex align-items-center gap-5 mt-5">
                    <button className="order__btns d-flex align-items-center justify-content-between">
                      Order now <i class="ri-arrow-right-s-line"></i>
                    </button>
                    <button className="all__foods-btn">
                      <Link to="/foods">See all foods</Link>
                    </button>
                  </div>

                  <div className="hero__service d-flex align-items-center gap-5 mt-5">
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i class="ri-car-line"></i>
                      </span>
                      No shipping charge
                    </p>
                    <p className="d-flex align-items-center gap-2">
                      <span className="shipping__icon">
                        <i class="ri-shield-check-line"></i>
                      </span>
                      100% secure checkout
                    </p>
                  </div>
                </div>
              </Col>
              <Col lg="6" md="6">
                <div className="hero__img">
                  <img src={heroImg} alt="hero-img" className="w-100" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Home;
