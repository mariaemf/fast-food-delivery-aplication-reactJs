import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/commom-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Register = () => {
  const singupNameRef = useRef();
  const singupPasswordRef = useRef();
  const singEmailRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet title="Singup">
        <CommonSection title="Singup" />
        <section>
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12" className="m-auto text-center">
                <form className="form mb-5" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Full name"
                      required
                      ref={singupNameRef}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      ref={singEmailRef}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      ref={singupPasswordRef}
                    />
                  </div>
                  <button type="submit" className="addTOCart__btn">
                    Sing Up
                  </button>
                </form>
                <Link to="/register">Already have an account? Login</Link>
              </Col>
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  );
};

export default Register;
