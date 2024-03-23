import { Outlet } from "react-router-dom";
import Header2 from "src/templates/header-user-2";
import HeaderUser2Bot from "../header-user-2-bot";
import FooterUser2 from "../footer-user-2";
import ConfigComponent2 from "src/components/config-component-2";


function UserTemplate2() {
    return (
        <ConfigComponent2>
            <Header2 />
            <HeaderUser2Bot />
            <div style={{ minHeight: 'calc(100vh - 300px)' }}>
                <Outlet />
            </div>
            <FooterUser2 />
        </ConfigComponent2>
    );
}

export default UserTemplate2