import React, {Fragment} from 'react';
import './global-style.scss';

export function GlobalStyle(props) {
	const {children} = props;
	return <Fragment>{children}</Fragment>;
}
