import React from "react";
import Routes from "../../routes/Routers";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <div>
          <Routes />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
