import React from "react";
import { Outlet } from "react-router-dom";
import ScrollToTop from "src/components/scroll-to-top";
import Header from "src/templates/header-user";
import Footer from "src/templates/footer-user";

function UserTemplate() {
  return (
    <ScrollToTop>
      <Header />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
}

export default UserTemplate;
