import { TbBulb } from "react-icons/tb";

import css from './footer-component.module.scss';
import { NavLink } from "react-router-dom";

function FooterComponent() {
	return (
		<div className={css.footerComponent}>
			<span>
				<TbBulb />
			</span>
			<span>
				A transaction is a cryptographically signed instruction that
				changes the blockchain state. Block explorers track the
				details of all transactions in the network. Learn more about
				transactions in our
			</span>
			<NavLink
				className={'--link-no-underline'}
			>
				Knowledge Base
			</NavLink>
		</div>
	)

}

export default FooterComponent