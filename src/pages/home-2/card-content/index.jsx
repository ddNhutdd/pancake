import Button2, {button2Type} from 'src/components/button-2';
import css from './card-content.module.scss';
import PropTypes from 'prop-types';
import {CiGrid41} from 'react-icons/ci';
import {GrLinkNext} from 'react-icons/gr';
import Loader from 'src/components/loader';
import Empty from 'src/components/empty';
import Modal2 from 'src/components/modal-2';
import {useState} from 'react';
import ModalContent from '../modal-content';

function CardContent(props) {
	const {title, footerContent, content, classNameContent, fetching} = props;

	// modal
	const [showModalLeft, setShowModalLeft] = useState(false);
	const modalToggle = () => setShowModalLeft((state) => !state);

	const renderFetching = () => (fetching ? '' : 'd-0');
	const renderEmpty = () =>
		!fetching && (!content || content.length <= 0) ? '' : 'd-0';

	return (
		<>
			<div className={css.mainContent}>
				<div className={css.mainContent__header}>
					{title}
					<Button2
						onClick={modalToggle}
						classname={css.mainContent__header__button}
						type={button2Type.outlineSmall}
					>
						<CiGrid41 />
						Customize
					</Button2>
				</div>
				<div
					className={`${css.mainContent__content} ${classNameContent}`}
				>
					{content}
				</div>
				<div className={renderFetching()}>
					<Loader />
				</div>
				<div className={renderEmpty()}>
					<Empty />
				</div>
				<div className={css.mainContent__footer}>
					{footerContent}
					<GrLinkNext />
				</div>
			</div>

			<Modal2
				show={showModalLeft}
				setShow={setShowModalLeft}
				showHeader={true}
				title={`Custom card`}
				showFooter={false}
				content={<ModalContent />}
			/>
		</>
	);
}

CardContent.propTypes = {
	title: PropTypes.node,
	footerContent: PropTypes.node,
	content: PropTypes.node,
	classNameContent: PropTypes.object,
	fetching: PropTypes.bool,
};

CardContent.defaultProps = {
	title: `Title`,
	footerContent: 'footer',
	classNameContent: {},
};

export default CardContent;
