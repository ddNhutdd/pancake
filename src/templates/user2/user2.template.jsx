import { Outlet } from "react-router-dom";
import ConfigComponent from "src/components/config-component";
import Header2 from "src/templates/header-user-2";


function UserTemplate2() {
    return (
        <ConfigComponent>
            <Header2 />
            <Outlet />
        </ConfigComponent>
    );
}

export default UserTemplate2