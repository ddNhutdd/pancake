import { Outlet } from "react-router-dom";
import ConfigComponent from "src/components/config-component";
import Header2 from "src/templates/header-user-2";
import HeaderUser2Bot from "../header-user-2-bot";
import FooterUser2 from "../footer-user-2";


function UserTemplate2() {
    return (
        <ConfigComponent>
            <Header2 />
            <HeaderUser2Bot />
            <Outlet />
            <FooterUser2 />
        </ConfigComponent>
    );
}

export default UserTemplate2