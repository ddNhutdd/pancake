import Card from 'src/components/card';
import LogRecord from './log-record';
import css from './log.module.scss';
import { apiStatus } from 'src/constants';
import Loader from 'src/components/loader';
import PropTypes from 'prop-types';

const Log = function (props) {
	const {
		list,
		status,
		error
	} = props;

	const renderList = () => {
		return list?.map((item, index) => {
			const renderLine = () => {
				if (index !== list.length - 1) {
					return <div className={css.log__line}></div>;
				}
			};
			return (
				<div key={index}>
					<LogRecord index={index} content={item} />
					{renderLine()}
				</div>
			);
		});
	}

	const renderFetching = () => (status === apiStatus.fetching ? '' : 'd-0');
	const renderContent = () => (status === apiStatus.fullfiled ? '' : 'd-0');
	const renderError = () => (status === apiStatus.rejected ? '' : 'd-0');

	return (
		<>
			<Card className={`${css.log} ${renderContent()}`}>
				<div className='mb-3'>Transaction Receipt Event Logs</div>
				{renderList()}
			</Card>
			<div className={renderError()}>{error}</div>
			<div className={renderFetching()}>
				<Loader />
			</div>
		</>
	);
};


Log.propTypes = {
	list: PropTypes.array,
	status: PropTypes.oneOf(Object.values(apiStatus)),
	error: PropTypes.node
}

export default Log;
