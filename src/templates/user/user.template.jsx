import { Outlet } from "react-router-dom";
import ConfigComponent from "src/components/config-component";
import Header from "src/templates/header-user";
import Footer from "src/templates/footer-user";

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
