import React from "react";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header.jsx";

const Layout = () => {
  return (
    <div>
      <Header>
        <div>
          <Routes />
        </div>
        <Footer />
      </Header>
    </div>
  );
};

export default Layout;
