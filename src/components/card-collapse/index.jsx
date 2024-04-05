import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import Card from '../card';

const CardCollapse = function (props) {
	const {
		children,
		footer,
		className,
		show,
		setShow
	} = props;

	const containerElement = useRef();

	const footerClickHandle = () => {
		setShow(state => !state);
	}
	const collapseContent = () => {
		containerElement.current.style.maxHeight = '0';
		containerElement.current.style.transition = 'max-height 0.4s ease-in-out';
		containerElement.current.style.overflow = 'hidden';
	}  
	const expandContent = () =>  {
		containerElement.current.style.maxHeight = '800px';
		containerElement.current.style.transition = 'max-height 0.4s ease-in-out';
		const idTimeout = setTimeout(() => {
			containerElement.current.style.overflow = 'visible';
			clearTimeout(idTimeout);
		}, 400);
	}

	useEffect(()=>{
		if(!containerElement || !containerElement.current) return;

		if (show) {
			expandContent();
		} else {
			collapseContent();
		}
	}, [show])

	return <Card className={`${className}`}>
		<div 
			ref={containerElement}
		>
			{children}
		</div>
		<div 
			className={`hover-p`} 
			onClick={footerClickHandle}
		>
			{footer}
		</div>
	</Card>
}

CardCollapse.propTypes = {
	children: PropTypes.node,
	footer: PropTypes.node,
	className: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	show: PropTypes.bool,
	setShow: PropTypes.func
};

export default CardCollapse;