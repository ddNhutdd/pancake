import {Outlet} from 'react-router-dom';
import ConfigComponent2 from 'src/components/config-component-2';
import HeaderUser2 from './header-user-2';
import HeaderUser2Bot from './header-user-2-bot';
import FooterUser2 from './footer-user-2';

function UserTemplate2() {
	return (
		<ConfigComponent2>
			<HeaderUser2 />
			<HeaderUser2Bot />
			<div style={{minHeight: 'calc(100vh - 300px)'}}>
				<Outlet />
			</div>
			<FooterUser2 />
		</ConfigComponent2>
	);
}

export default UserTemplate2;
