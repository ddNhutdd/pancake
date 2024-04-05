import Card from "src/components/card";
import LogRecord from "./log-record";
import css from './log.module.scss';
import { apiStatus } from "src/constants";
import Loader from "src/components/loader";


const Log = function (props) {
	const {
		list,
		status,
		error
	} = props;


	const renderList = () => list?.map((item, index) => {
		const renderLine = () => {
			if(index === list.length - 1) {

			} else {
				return <div className={css.log__line}></div>
			}
		}
		return <div key={index}>
			<LogRecord content={item} />
			{renderLine()}
		</div>
	})
	const renderFetching = () => status === apiStatus.fetching ? '' : 'd-0';
	const renderContent = () => status === apiStatus.fullfiled ? '' : 'd-0';
	const renderError = () => status === apiStatus.rejected ? '' : 'd-0';
 
	return (<>
		<Card className={css.log}>
			<div className={renderContent()}>	
				<div className="mb-3">
					Transaction Receipt Event Logs
				</div>
				{renderList()}
			</div>
			<div className={renderError()}>
				{error}
			</div>
		</Card>
		<div className={renderFetching()}>
			<Loader />
		</div>
	</>)
}

export default Log;