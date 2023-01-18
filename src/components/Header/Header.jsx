import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../Styles/header.css";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "All-Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/Contact",
  },
];

const header = () => {
  return (
    <>
      <header className="header">
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
            </div>

            {/*========= menu =========*/}

            <div className="navigation">
              <div className="menu d-flex aling-items-center gap-5">
                {nav__links.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    /*esta class demonstra para quando estiver selecionado o menu o mesmo deve permanecer com a class ativa => com a cor vermelha*/
                    className={(navClass) =>
                      navClass.isActive ? "active__menu" : ""
                    }
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* ======== nav right icons ========*/}

            <div className="nav__right d-flex align-items-center gap-4">
              <span className="cart__icon">
                <i class="ri-shopping-basket-line"></i>
                <span className="span cart__badge">2</span>
              </span>

              <span className="user">
                <Link to="login">
                  {" "}
                  {/* link importado do react-dom para que o login seja um link */}
                  <i class="ri-user-line"></i>{" "}
                  {/* icone importado do react-icons*/}
                </Link>
              </span>

              <span className="mobile__menu">
                <i class="ri-menu-line"></i>{" "}
                {/* icone importado do react-icons*/}
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default header;
