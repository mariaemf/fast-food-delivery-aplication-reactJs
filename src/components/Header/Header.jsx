import React, { useRef, useEffect } from "react";

import { Link, NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import logo from "../../assets/images/res-logo.png";
import "../../Styles/header.css";
import { useSelector } from "react-redux";

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

const Header = () => {
  const menuRef = useRef();
  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });

    return () => window.removeEventListener("scroll", null);
  }, []);

  return (
    <>
      <header className="header" ref={headerRef}>
        <Container>
          <div className="nav__wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
            </div>

            {/*========= menu =========*/}

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
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
                <span className="span cart__badge">{totalQuantity}</span>
              </span>

              <span className="user">
                <Link to="login">
                  {/* link importado do react-dom para que o login seja um link */}
                  <i class="ri-user-line"></i>
                  {/* icone importado do react-icons*/}
                </Link>
              </span>

              <span className="mobile__menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
                {/* icone importado do react-icons*/}
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
