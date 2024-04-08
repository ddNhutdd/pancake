import Card from 'src/components/card';
import css from './top-statics-item.module.scss';
import PropTypes from 'prop-types';

function TopStaticsItem(props) {
	const {content} = props;

	const renderCols = () =>
		content.rows.map((item, index) => (
			<div key={index}>
				<div className='row'>
					<div className='col-6 p-0 col-sm-12'>{item.leftTop}</div>
					<div className='col-6 text-right p-0 col-sm-12 text-sm-left'>
						{item.rightTop}
					</div>
				</div>
				<div className='row'>
					<div className='col-6 p-0 col-sm-12'>{item.leftBot}</div>
					<div className='col-6 text-right p-0 col-sm-12 text-sm-left'>
						{item.rightBot}
					</div>
				</div>
				{renderLine(content.rows, index)}
			</div>
		));
	const renderLine = (list, index) =>
		list.length > index + 1 ? (
			<div className={css.topStaticsItem__line}></div>
		) : (
			''
		);

	return (
		<Card
			style={{height: '100%'}}
			className={css.topStaticsItem}
		>
			<div className={css.topStaticsItem__header}>
				{content.headerLeft}
				{content.headerRight}
			</div>
			<div className={css.topStaticsItem__body}>{renderCols()}</div>
		</Card>
	);
}

TopStaticsItem.propTypes = {
	content: PropTypes.object,
};

export default TopStaticsItem;
