import { Outlet } from "react-router-dom";
import ConfigComponent from "src/components/config-component";
import Footer from "./footer-user";
import Header from "./header-user";

function UserTemplate() {
  return (
    <ConfigComponent>
      <Header />
      <Outlet />
      <Footer />
    </ConfigComponent>
  );
}

export default UserTemplate;
